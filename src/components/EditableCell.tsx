import { updateCell } from '@/store/slices/dataSlice';
import { ColumnConfig, TableData } from '@/types';
import { TableCell, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface EditableCellProps {
    row: TableData;
    column: ColumnConfig;
    value: string | number;
}

export default function EditableCell({ row, column, value }: EditableCellProps) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(String(value));

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        let finalValue: string | number = editValue;

        // Validate and convert value based on column type
        if (column.type === 'number') {
            const numValue = Number(editValue);
            if (isNaN(numValue)) {
                setEditValue(String(value)); // Reset to original value if invalid
                return;
            }
            finalValue = numValue;
        } else if (column.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(editValue)) {
                setEditValue(String(value)); // Reset to original value if invalid
                return;
            }
        }

        if (String(finalValue) !== String(value)) {
            dispatch(updateCell({
                id: row.id,
                field: column.id,
                value: finalValue
            }));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleBlur();
        } else if (e.key === 'Escape') {
            setIsEditing(false);
            setEditValue(String(value));
        }
    };

    const formatValue = (val: string | number) => {
        if (val === undefined || val === null) return '';

        switch (column.type) {
            case 'number':
                return typeof val === 'number' ? val.toLocaleString() : val;
            case 'email':
                return val;
            default:
                return String(val);
        }
    };

    return (
        <TableCell
            onDoubleClick={handleDoubleClick}
            sx={{ cursor: 'pointer', minWidth: 120 }}
        >
            {isEditing ? (
                <TextField
                    autoFocus
                    fullWidth
                    size="small"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    type={column.type === 'number' ? 'number' : 'text'}
                    error={
                        column.type === 'email' &&
                        editValue !== '' &&
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editValue)
                    }
                />
            ) : (
                <Typography variant="body2">{formatValue(value)}</Typography>
            )}
        </TableCell>
    );
} 