import React from 'react';
import {Footer} from "../components/Footer";
import {Button} from "../components/Button";
import PDF from "../components/PDF";




const Widerrufsformular: React.FC = () => {

    return (
        <div className={"w-full pt-24"}>
            <h2 className="p-6 md:pt-20 md:px-[15%] hyphens-manual">
                Widerrufsformular
            </h2>
            <div>
                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück an:<br/><br/>
                    hearow GesbR <br/>
                    Michael-Pacher-Straße 38<br/>
                    5020 Salzburg<br/><br/>

                    Mobil: <a className={"underline hover:text-orange-accent"} href="tel:+4915175059609">+49 151 75 05 96 09</a><br/>

                    E-Mail: <a className={"underline hover:text-orange-accent"} href="mailto:hearow.nav@gmail.com">hearow.nav@gmail.com</a><br/><br/>

                    <PDF></PDF>
                </p>



            </div>


            <Footer/>
        </div>
)}

export default Widerrufsformular;