'use client';

import { RootState, persistor, store } from '@/store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const themeMode = useSelector((state: RootState) => state.theme.mode);

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#dc004e',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeWrapper>
                    {children}
                </ThemeWrapper>
            </PersistGate>
        </Provider>
    );
} 