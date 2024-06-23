import React from 'react';
import {useNavigate} from "react-router-dom";
import Index from "./Index";
import {Footer} from "../components/Footer";

const Impressum: React.FC = () => {
    return (
        <div className="absolute top-[60px] md:w-[80%] md:left-[20%] md:top-0">
            <div className=" p-6 md:px-20 md:py-16">
                <h1>Impressum</h1>
            </div>

            <Footer />
        </div>)
}

export default Impressum;