import React, {useContext, useEffect, useState} from 'react';
import {Button} from "./Button";
import {Link, useNavigate} from "react-router-dom";
import {DarkModeContext} from "../contexts/DarkModeContext";
import {VscColorMode} from "react-icons/vsc";

export function Sidebar() {
    const navigate = useNavigate();

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    return (
        <div
            className="w-full p-3 bg-primary-color-dm dark:bg-primary-color-lm flex flex-row items-center gap-4 z-20 justify-between fixed top-0 md:py-3 md:px-6">
            <Link to="/"><img src={darkMode ? "./images/hearowLogoDark.svg" : "./images/hearowLogoLight.svg"} alt="Hearow Logo"
                              className="m-2 md:p-2 w-[72px] md:w-[140px]"/></Link>
            <div className="flex-1"><Button onClick={() => toggleDarkMode()} classes="ml-auto"><VscColorMode className="text-primary-color-dm dark:text-primary-color-lm"/>Ansicht</Button>
            </div>

            <Button onClick={() => navigate("/impressum")}>Impressum</Button>
        </div>
    );
}