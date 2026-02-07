import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e3a8a', // Deep blue
            light: '#3b82f6',
            dark: '#1e293b',
        },
        secondary: {
            main: '#fbbf24', // Yellow/Gold
            light: '#fcd34d',
            dark: '#f59e0b',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b',
            secondary: '#475569',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.5rem',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.25rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 24px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                },
            },
        },
    },
});

export default theme;
