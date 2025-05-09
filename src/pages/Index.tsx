import React, {useContext} from 'react';
import {ImageAndText} from "../components/ImageAndText";
import {Footer} from "../components/Footer";
import {DarkModeContext} from "../contexts/DarkModeContext";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Index: React.FC = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className="absolute top-0">
            <div className="absolute w-full h-[100vh] flex justify-start items-end md:items-center md:justify-end z-10 p-12 bg-white bg-opacity-50 md:bg-opacity-0 md:!px-[15%]">
                <h1>Dein Weg.<br/>
                    Dein Klang.<br/>
                    Deine Freiheit.</h1>
            </div>
            <img src="./images/Mockup_Titleimage.png" alt="Man holding an iPhone"
                 className="relative w-full h-[100vh] object-cover object-left-top"/>
            <h2 className="p-6 md:py-20 md:px-[15%] hyphens-manual">
                Für mehr Freiheit, sichere Wege und mehr Selbstständigkeit in Deinem Alltag!
            </h2>

            <Splide className="xl:hidden w-full mb-10 md:w-1/2 md:mx-auto" aria-label="App Mockups">
                <SplideSlide>
                    <img src="./images/Mockup_einzelnes Handy.png" alt="Mockup IPhone screen"
                         className="h-[500px] object-cover mx-auto my-20"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/NavigationSearch.png"
                         alt="Navigationssuche"
                         className="h-[500px] object-cover shadow-2xl shadow-black rounded-[25px] mx-auto my-20"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/NavigationStep.png" alt="Schritt für Schritt Navigation"
                         className="h-[500px] object-cover shadow-2xl shadow-black rounded-[25px] mx-auto my-20"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/NavigationMap.png" alt="Navigation Karte"
                         className="h-[500px] object-cover shadow-2xl shadow-black rounded-[25px] mx-auto my-20"/>
                </SplideSlide>
            </Splide>


            <div className="hidden w-full xl:flex flex-row justify-center items-center mb-12">
                <img src="./images/Mockup_einzelnes Handy.png" alt="Mockup IPhone screen"
                     className="h-[500px] object-cover"/>
                <div className="flex flex-col gap-6 md:flex-row">
                    <img src="./images/NavigationSearch.png"
                                                                      alt="Navigationssuche"
                                                                      className="h-[350px] object-cover drop-shadow-md rounded-[10px]"/>
                    <img src="./images/NavigationStep.png" alt="Schritt für Schritt Navigation"
                         className="h-[350px] object-cover drop-shadow-md rounded-[10px]"/>
                    <img src="./images/NavigationMap.png" alt="Navigation Karte"
                         className="h-[350px] object-cover drop-shadow-md rounded-[10px]"/></div>
            </div>
            <div
                className="w-full flex flex-col gap-4 p-6 md:px-[15%] md:py-20 bg-primary-color-lm dark:bg-primary-color-dm background">
                <h2>Deine Schritte, Deine Stimme, Dein Weg</h2>
                <div className="flex flex-col gap-10 justify-center items-center lg:flex-row">
                    <img src="./images/Mockup_zweiHandys.png" alt="Mockup IPhone screen"
                         className="md:w-1/2 h-auto object-cover"/>
                    <p className="md:w-1/2">Um Hearow optimal zu nutzen, kannst du dein Profil exakt auf dich einrichten.<br/>Wähle deine
                        Lieblingsstimme aus und richte deine persönliche Schrittlänge ein, um eine exakte
                        Wegbeschreibung zu erhalten!</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 p-6 md:px-[15%] md:py-20">
                <h2>Was ist Hearow?</h2>
                <div className="flex flex-col gap-10 lg:flex-row">
                    <p className="md:w-1/2">Hearow ist eine Navigations-App für Sehbeeinträchtigte Personen.<br/>
                        Um auch Menschen mit Sehbeeinträchtigung eine sichere und präzise Navigation zu gewährleisten,
                        haben wir es uns zur Aufgabe gemacht diese Anforderungen mit Hearow zu erfüllen.</p>
                    <p className="md:w-1/2">In engem Austausch mit betroffenen Personen haben wir herausgefunden, auf welche Attribute es
                        ankommt, um Menschen, die sich auf all ihre Sinne verlassen müssen, sicher und zielgerichtet von
                        A nach B zu bringen. </p></div>
            </div>
            <div className="w-full flex flex-col items-start gap-4 p-6 md:px-[15%] md:py-20">
                <h2 className="mb-5">Was ist das Besondere an Hearow?</h2>
                <ImageAndText image={darkMode ? "./images/BubbleStepsDark.png" : "./images/BubbleSteps.png"}
                              alt="Schrittlänge personalisieren">
                    <h3 className="mb-2 md:mb-4 ">In der App kannst du deine exakte Schrittlänge konfigurieren.</h3>
                    <p>Dies garantiert exakte Ansagen, wie viele Schritte deine Route beträgt oder in wie vielen
                        Schritten eine Straße überquert werden muss.</p>
                </ImageAndText>
                <ImageAndText image={darkMode ? "./images/BubbleFavoritesDark.png" : "./images/BubbleFavorites.png"}
                              alt="Navigationsübersicht">
                    <h3 className="mb-2 md:mb-4 ">Deine Favoriten machen es dir leicht regelmäßigen Ziele zu
                        erreichen.</h3>
                    <p>Speichere regelmäßige Ziele in deinen Favoriten. So kannst du mit nur einer Auswahl direkt dein
                        Ziel ansteuern.</p>
                </ImageAndText>
                <ImageAndText image={darkMode ? "./images/BubbleSoundDark.png" : "./images/BubbleSound.png"}
                              alt="Navigationsübersicht">
                    <h3 className="mb-2 md:mb-4 ">Wähle deine Lieblingsstimme, die dich an dein Ziel bringen soll.</h3>
                    <p>Du kannst nicht nur die Stimme wählen, der du am liebsten zu hörst, personalisiere auch die
                        Geschwindigkeit deiner Ansagen.</p>
                </ImageAndText>

            </div>
            <Footer/>

        </div>
    )
}

export default Index;