import React from 'react';
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../components/Sidebar";

const Index: React.FC = () => {
    return (

            <div className="absolute top-[60px] md:w-[80%] md:left-[20%] md:top-0">
                <img src="./images/manHoldingiPhoneMockup.png" alt="Man holding an iPhone" className="w-full h-[calc(100vh*0.5)] object-cover"/>
                <h1 className="p-6 md:px-20 md:py-16 hyphens-manual">
                    Für mehr Freiheit, sichere Wege und mehr Selbsständigkeit in Deinem Alltag!
                </h1>
                <div className="w-full flex flex-col gap-4 justify-center items-center p-6 md:flex-row">
                    <img src="./images/deineRoute-iPhone-15-Pro-Mockup.png" alt="Mockup IPhone screen" className="h-[500px] object-cover"/>
                    <img src="./images/NavigationUebersicht.png" alt="Navigationsübersicht" className="h-[300px] object-cover drop-shadow-md"/>
                    <img src="./images/NavigationNavi.png" alt="Schritt für Schritt Navigation" className="h-[300px] object-cover drop-shadow-md"/>
                    <img src="./images/NavigationZiel_erreicht.png" alt="Ziel erreicht" className="h-[300px] object-cover drop-shadow-md"/>

                </div>
                <div className="w-full flex flex-col gap-4 p-6 md:px-20 md:py-16 bg-primary-color-lm dark:bg-primary-color-dm">
                <h2>Deine Schritte, Deine Stimme, Dein Weg</h2>
                <div className="flex flex-col gap-10 justify-center items-center lg:flex-row background">
                    <img src="./images/ProfiliPhone15ProMockup.png" alt="Mockup IPhone screen" className="md:w-1/2 h-auto object-cover"/>
<p>Um Toni optimal zu nutzen, kannst du dein Profil exakt auf dich einrichten.<br/>Wähle deine Lieblingsstimme aus und richte deine persönliche Schrittlänge ein, um eine exakte Wegbeschreibung zu erhalten!</p>
                </div>
                </div>
                <div className="w-full flex flex-col gap-4 p-6 md:px-20 md:py-16">
                    <h2 className="h1">Was ist Toni?</h2>
                    <div className="flex flex-col gap-10 lg:flex-row">
<p>Toni ist eine Navigations-App für Sehbeeinträchtigte Personen.<br/>
    Um auch Menschen mit Sehbeeinträchtigung eine sichere und präzise Navigation zu gewährleisten, haben wir es uns zur Aufgabe gemacht diese Anforderungen mit Toni zu erfüllen.</p>
                    <p>In engem Austausch mit betroffenen Personen haben wir herausgefunden, auf welche Attribute es ankommt, um Menschen, die sich auf all ihre Sinne verlassen müssen, sicher und zielgerichtet von A nach B zu bringen. </p></div>
                </div>
                <div className="w-full flex flex-col gap-4 p-6 md:px-20 md:py-16">
                    <h2 className="h1">Was ist das Besondere an Toni?</h2>
                </div>

            </div>
    )
}

export default Index;