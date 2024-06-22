import {Sidebar} from "./components/Sidebar";
import React from "react";

export default function App() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="absolute top-[60px] md:w-[80%] md:left-[20%] md:top-0">
                <h1 >
                    Hello world!
                </h1>
                <h2 > Überschrift 2</h2>
                <h2 className="h1"> Überschrift 2</h2>
            </div>

        </div>)
}