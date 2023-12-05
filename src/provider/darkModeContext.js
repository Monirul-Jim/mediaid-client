'use client'
import { ThemeProvider } from 'next-themes';
import '../app/globals.css';


export const DarkModeProvider = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    );
};

