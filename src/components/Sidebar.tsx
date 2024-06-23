import React, {useContext, useEffect, useState} from 'react';
import {Button} from "./Button";
import {Link, useNavigate} from "react-router-dom";
import {DarkModeContext} from "../contexts/DarkModeContext";

export function Sidebar() {
    const navigate = useNavigate();

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div
            className="w-full p-3 bg-primary-color-dm dark:bg-primary-color-lm flex flex-row items-center gap-4 z-10 md:items-start md:flex-col justify-between md:h-[100vh] md:w-[20%] fixed top-0 md:p-6">
            <Link to="/"><img src={darkMode ? "./images/logo-light.svg" : "./images/logo-dark.svg"} alt="Toni Logo"
                              className="w-[72px] md:w-3/4 md:mx-auto md:mb-6"/></Link>
            <div className="flex-1"><Button onClick={() => toggleDarkMode()} classes="ml-auto md:ml-0">Ansicht</Button></div>

            <Button onClick={() => navigate("/impressum")}>Impressum</Button>
        </div>
    );
}