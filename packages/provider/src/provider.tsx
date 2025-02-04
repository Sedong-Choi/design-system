import { useCallback, useState } from 'react';
import { type ThemeProviderContext, ThemeContext } from './context';
import { darkTheme, lightTheme } from './theme';


export const ThemeProvider = ({ children }) => {
    // TODO - system color scheme or stored color scheme check
    const [colorScheme, setColorScheme] = useState<ThemeProviderContext['colorScheme']>('light');

    const toggleColorScheme = useCallback(() => {
        setColorScheme((prev) => prev === 'light' ? 'dark' : 'light');
    }, []);

    const value = {
        ...(colorScheme === 'light' ? lightTheme : darkTheme),
        changeTheme: toggleColorScheme
    }

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}