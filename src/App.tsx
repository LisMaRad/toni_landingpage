import React from "react";
import { Outlet } from "react-router";
import {Sidebar} from "./components/Sidebar";
import {Footer} from "./components/Footer";

export default function App() {
    return (

        <div className="flex">
            <Sidebar />
        <Outlet />
            </div>
    )
}