'use client';

import { RootState } from '@/store';
import { toggleTheme } from '@/store/slices/themeSlice';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function ThemeToggle() {
    const dispatch = useDispatch();
    const themeMode = useSelector((state: RootState) => state.theme.mode);

    return (
        <Tooltip title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
                {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
        </Tooltip>
    );
} 