'use client';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

interface ConfirmDialogProps {
    open: boolean;
    title: string;
    content: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmDialog({
    open,
    title,
    content,
    onConfirm,
    onCancel,
}: ConfirmDialogProps) {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onConfirm} color="error" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
} 