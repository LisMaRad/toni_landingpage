import React from 'react';
import {useNavigate} from "react-router-dom";
import Index from "./Index";
import {Footer} from "../components/Footer";

const Impressum: React.FC = () => {
    return (
        <div className="absolute w-full top-[60px] flex flex-col justify-between h-[calc(100%-60px)]">
            <div className="p-6 md:px-20 md:py-16">
                <h1 className="dark:text-primary-color-dm">Impressum</h1>
                <p>Informationspflicht laut § 5 E-Commerce Gesetz, Offenlegungspflicht laut §25 Mediengesetz.</p>
                <p>Tel.: <a href="tel:+4915175059609">+49 151 75 05 96 09</a><br/>
                    E-Mail: <a href="mailto:toni.navigation@gmail.com">toni.navigation@gmail.com</a></p>
                <p>Berufsrecht: Gewerbeordnung (GewO), abrufbar unter: http://www.ris2.bka.gv.at</p>
                <p>Blattlinie: Die Website dient zur Präsentation des Unternehmens.</p>
            </div>

                <Footer />

        </div>)
}

export default Impressum;