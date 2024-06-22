import React from 'react';
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../components/Sidebar";

const Index: React.FC = () => {
    return (

            <div className="absolute top-[60px] md:w-[80%] md:left-[20%] md:top-0">
                <img src="./images/manHoldingiPhoneMockup.png" alt="Man holding an iPhone" className="w-full h-[calc(100vh*0.5)] object-cover"/>
                <h1 className="mx-20 my-16 hyphens-manual">
                    Für mehr Freiheit, sichere Wege und mehr Selbsständigkeit in Deinem Alltag!
                </h1>
                <div className="w-full flex flex-col gap-4 justify-center items-center md:flex-row">
                    <img src="./images/deineRoute-iPhone-15-Pro-Mockup.png" alt="Mockup IPhone screen" className="h-[500px]"/>
                    <img src="./images/NavigationUebersicht.png" alt="Navigationsübersicht" className="h-[300px] drop-shadow-md"/>
                    <img src="./images/NavigationNavi.png" alt="Schritt für Schritt Navigation" className="h-[300px] drop-shadow-md"/>
                    <img src="./images/NavigationZiel_erreicht.png" alt="Ziel erreicht" className="h-[300px] drop-shadow-md"/>

                </div>
                <h2 className="h1"> Überschrift 2</h2>
            </div>
    )
}

export default Index;