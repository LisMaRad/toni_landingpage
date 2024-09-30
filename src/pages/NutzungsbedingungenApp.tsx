import React, {useContext} from 'react';
import {Footer} from "../components/Footer";
import {DarkModeContext} from "../contexts/DarkModeContext";
import '@splidejs/react-splide/css';

const Index: React.FC = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={"w-full pt-24"}>
            <h2 className="p-6 md:py-20 md:px-[15%] hyphens-manual">
                Nutzungsbedingungen
            </h2>
            <div>
                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">text</p>
            </div>

            <Footer/>

        </div>
    )
}

export default Index;