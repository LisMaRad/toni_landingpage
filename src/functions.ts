export const changeDarkMode = (darkModeFunction: (value: boolean) => any, darkmode: boolean) => {
    document.querySelector('html')?.classList.toggle('dark');
    darkModeFunction(!darkmode);
}

export const checkForDarkmode = () => {
    if (document.querySelector('html')?.classList.contains('dark')) {
        return true;
    }
    return false;
};