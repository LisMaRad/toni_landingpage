import {Sidebar} from "./components/Sidebar";
import React from "react";

export default function App() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-[80%] absolute left-[20%]">
                <h1 >
                    Hello world!
                </h1>
                <h2 > Überschrift 2</h2>
                <h2 className="h1"> Überschrift 2</h2>

            </div>

        </div>)
}