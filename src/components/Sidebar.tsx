import React, {useEffect, useState} from 'react';
import {Button} from "./Button";

export function Sidebar() {
    const [darkmode, setDarkmode] = useState(false);
    const checkForDarkmode = () => {
        if (document.querySelector('html')?.classList.contains('dark')) {
            return true;
        }
        return false;
    };

    const changeDarkMode = () => {
        document.querySelector('html')?.classList.toggle('dark');
        setDarkmode(!darkmode);
    }

    useEffect(() => {
        setDarkmode(checkForDarkmode());
    },[darkmode]);

    return (
        <div
            className="w-full h-[60px] p-3 bg-primary-color-dm dark:bg-primary-color-lm flex flex-row items-center gap-4 md:items-start md:flex-col justify-between md:h-[100vh] md:w-[20%] fixed top-0 md:p-6">
            <img src={darkmode ? "./images/logo-light.svg" : "./images/logo-dark.svg"} alt="Toni Logo"
                 className="w-[72px] md:w-3/4 md:mx-auto md:mb-6"/>
            <div className="flex-1"><Button onClick={changeDarkMode} classes="ml-auto md:ml-0">Ansicht</Button></div>

            <Button onClick={() => console.log("hallo")}>Impressum</Button>
        </div>
    );
}