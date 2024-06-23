import React, { useState, useEffect } from 'react';
import { DarkModeContext } from './DarkModeContext';
import {changeDarkMode, checkForDarkmode} from '../functions';

interface DarkModeProviderProps {
    children: React.ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(checkForDarkmode());
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        changeDarkMode(setDarkMode, darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};