import React, {useContext, useEffect, useState} from 'react';
import {DarkModeContext} from "../contexts/DarkModeContext";


export function Footer() {
    const { darkMode } = useContext(DarkModeContext);


    return (
        <div className="w-full flex justify-center items-center sm:items-end gap-8 bg-primary-color-lm dark:bg-primary-color-dm p-6">
            <img src={darkMode ? "./images/hearowLogoLight.svg" : "./images/hearowLogoDark.svg"} alt="Hearow Logo"
                 className="w-[100px] md:w-[200px]"/>
            <h2 className="!text-orange-accent px-12 sm:pb-1 md:pb-4 xl:pb-2">Bald in eurem App Store!</h2>
        </div>
    );
}