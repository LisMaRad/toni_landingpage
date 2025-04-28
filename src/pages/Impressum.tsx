import React from 'react';
import {useNavigate} from "react-router-dom";
import Index from "./Index";
import {Footer} from "../components/Footer";

const Impressum: React.FC = () => {

    return (
        <div className={"w-full pt-24"}>
            <h2 className="p-6 md:pt-20 md:px-[15%] hyphens-manual">
                Impressum
            </h2>
            <div>
                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    Informationspflicht laut § 5 E-Commerce Gesetz, Offenlegungspflicht laut §25 Mediengesetz. <br/><br/>

                    …… <br/><br/>

                    <b>Firmeninformation:</b><br/><br/>

                    Alina, Wax, 26.11.2000<br/>
                    Michael-Pacher-Straße 38, 5020 Salzburg<br/><br/>

                    Lisa-Marie, Rader, 10.08.1999<br/>
                    Moserstraße 23e, 5020 Salzburg<br/><br/>

                    Philine, Hörnemann, 08.06.2000<br/>
                    Urstein Süd 3, 5412 Puch<br/><br/>

                    Julian, Fleig, 21.06.1997<br/>
                    Erentrudisstraße 19, 5020 Salzburg<br/><br/>

                    als hearow GesbR<br/><br/>

                    Unternehmensgegenstand: Entwicklung und Vertrieb von Software, insbesondere im Bereich Navigation<br/><br/>

                    Mobil: <a className={"underline hover:text-orange-accent"} href="tel:+4915175059609">+49 151 75 05 96 09</a><br/>
                    E-Mail: <a className={"underline hover:text-orange-accent"} href="mailto:hearow.nav@gmail.com">hearow.nav@gmail.com</a><br/><br/>

                    Berufsrecht: Gewerbeordnung (GewO), abrufbar unter: <a className={"underline hover:text-orange-accent"} href="http://www.ris2.bka.gv.at">http://www.ris2.bka.gv.at</a><br/>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>Weitere Links</b><br/>
                    <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com/agbs">Allgemeine Geschäftsbedingungen</a><br/>
                    <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com/nutzungsbedingungen">Nutzungsbedingungen</a><br/>
                    <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com/datenschutz">Datenschutz Richtlinien</a><br/>
                    <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com/widerrufsformular">Muster Widerrufsformular</a><br/><br/>
                </p>

            </div>


            <Footer/>
        </div>
)}

export default Impressum;