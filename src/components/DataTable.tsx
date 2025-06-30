'use client';

import { RootState } from '@/store';
import { setPage, setRowsPerPage, setSort } from '@/store/slices/dataSlice';
import { ColumnConfig, TableData } from '@/types';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import EditableCell from './EditableCell';

export default function DataTable() {
    const dispatch = useDispatch();
    const { data, search, sortBy, sortOrder, page, rowsPerPage } = useSelector(
        (state: RootState) => state.data
    );
    const { columns } = useSelector((state: RootState) => state.columns);

    const visibleColumns = (columns || []).filter((col: ColumnConfig) => col.visible);

    // Filter data based on search
    const filteredData = (data || []).filter((row: TableData) =>
        Object.values(row).some(value =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    );

    // Sort data
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortBy) return 0;

        const aValue = a[sortBy];
        const bValue = b[sortBy];

        // Handle undefined values
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return 1;
        if (bValue === undefined) return -1;

        // Compare values based on type
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortOrder === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        }

        // Compare numbers
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortOrder === 'asc'
                ? aValue - bValue
                : bValue - aValue;
        }

        // Convert to strings for mixed types
        const aString = String(aValue);
        const bString = String(bValue);
        return sortOrder === 'asc'
            ? aString.localeCompare(bString)
            : bString.localeCompare(aString);
    });

    // Paginate data
    const paginatedData = sortedData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    const handleSort = (field: string) => {
        const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
        dispatch(setSort({ field, order: newOrder }));
    };

    const getDefaultValue = (column: ColumnConfig) => {
        switch (column.type) {
            case 'number':
                return 0;
            default:
                return '';
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {visibleColumns.map((column: ColumnConfig) => (
                                <TableCell key={column.id}>
                                    <TableSortLabel
                                        active={sortBy === column.id}
                                        direction={sortBy === column.id ? sortOrder : 'asc'}
                                        onClick={() => handleSort(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((row: TableData) => (
                            <TableRow key={row.id} hover>
                                {visibleColumns.map((column: ColumnConfig) => (
                                    <EditableCell
                                        key={column.id}
                                        row={row}
                                        column={column}
                                        value={row[column.id] ?? getDefaultValue(column)}
                                    />
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={sortedData.length}
                page={page}
                onPageChange={(_, newPage) => dispatch(setPage(newPage))}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => dispatch(setRowsPerPage(parseInt(e.target.value, 10)))}
                rowsPerPageOptions={[5, 10, 25, 50]}
            />
        </>
    );
} 