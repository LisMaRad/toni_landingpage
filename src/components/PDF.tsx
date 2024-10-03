import React, { useCallback } from 'react';
import jsPDF from "jspdf";
import {Button} from "./Button";

const PDF = () => {
    const generatePDF = useCallback(() => {
        const doc = new jsPDF();
        doc.text(" Widerrufsformular ", 20, 20);
        doc.text(" Hiermit widerrufe ich den von mir abgeschlossenen Vertrag \nüber die Erbringung " +
            "der folgenden Dienstleistung: ", 20, 40);
        doc.text(" Bestellt am: ", 20, 60);
        doc.text(" Name: ", 20, 80);
        doc.text(" Anschrift: ", 20, 100);
        doc.text(" Datum, Unterschrift (nur bei Mitteilung auf Papier) ", 20, 120);
        doc.save("widerrufsformular.pdf");
    }, []);

    return (
        <div>
            <Button onClick={generatePDF}>Vorlage herunterladen</Button>
        </div>
    );
}

export default PDF;

