import React from 'react';
import { Theme } from './theme';

export interface ThemeProviderContext extends Theme {
    // TODO - add more context values here
    changeTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeProviderContext | null>(null);
ThemeContext.displayName = 'ThemeProviderContext';

export const useTheme = () => {
    const theme = React.useContext(ThemeContext);
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
}
