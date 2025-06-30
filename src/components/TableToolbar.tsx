'use client';

import { RootState } from '@/store';
import { addColumn, toggleColumnVisibility } from '@/store/slices/columnsSlice';
import { setData, setSearch } from '@/store/slices/dataSlice';
import { ColumnConfig } from '@/types';
import { exportCSV, importCSV } from '@/utils/csvUtils';
import {
    FileDownload as FileDownloadIcon,
    FileUpload as FileUploadIcon,
    Settings as SettingsIcon
} from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    IconButton,
    TextField,
    Tooltip
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TableToolbar() {
    const dispatch = useDispatch();
    const { search, data } = useSelector((state: RootState) => state.data);
    const { columns } = useSelector((state: RootState) => state.columns);

    const [columnDialogOpen, setColumnDialogOpen] = useState(false);
    const [newColumnName, setNewColumnName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(event.target.value));
    };

    const handleColumnToggle = (columnId: string) => {
        dispatch(toggleColumnVisibility(columnId));
    };

    const handleAddColumn = () => {
        if (newColumnName.trim()) {
            dispatch(addColumn({
                id: newColumnName.toLowerCase().replace(/\s+/g, '_'),
                label: newColumnName,
                visible: true,
                type: 'string'
            }));
            setNewColumnName('');
        }
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const importedData = await importCSV(file);
            dispatch(setData(importedData));
            setError(null);
        } catch {
            setError('Failed to import CSV file. Please check the file format.');
        }

        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleExport = () => {
        const visibleColumns = (columns || []).filter((col: ColumnConfig) => col.visible);
        exportCSV(data || [], visibleColumns);
    };

    return (
        <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField
                label="Search"
                variant="outlined"
                size="small"
                value={search}
                onChange={handleSearchChange}
                sx={{ minWidth: 200 }}
            />

            <Box sx={{ display: 'flex', gap: 1 }}>
                <input
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />

                <Tooltip title="Import CSV">
                    <Button
                        variant="outlined"
                        startIcon={<FileUploadIcon />}
                        onClick={handleImportClick}
                    >
                        Import
                    </Button>
                </Tooltip>

                <Tooltip title="Export CSV">
                    <Button
                        variant="outlined"
                        startIcon={<FileDownloadIcon />}
                        onClick={handleExport}
                    >
                        Export
                    </Button>
                </Tooltip>

                <Tooltip title="Manage Columns">
                    <IconButton onClick={() => setColumnDialogOpen(true)}>
                        <SettingsIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            {error && (
                <Alert severity="error" onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            <Dialog open={columnDialogOpen} onClose={() => setColumnDialogOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Manage Columns</DialogTitle>
                <DialogContent>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="New Column Name"
                            value={newColumnName}
                            onChange={(e) => setNewColumnName(e.target.value)}
                            fullWidth
                            size="small"
                            sx={{ mb: 1 }}
                        />
                        <Button variant="contained" onClick={handleAddColumn} disabled={!newColumnName.trim()}>
                            Add Column
                        </Button>
                    </Box>

                    <Box>
                        {(columns || []).map((column: ColumnConfig) => (
                            <FormControlLabel
                                key={column.id}
                                control={
                                    <Checkbox
                                        checked={column.visible}
                                        onChange={() => handleColumnToggle(column.id)}
                                    />
                                }
                                label={column.label}
                            />
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setColumnDialogOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
} 