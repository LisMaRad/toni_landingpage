import React from 'react';
import {Footer} from "../components/Footer";
import '@splidejs/react-splide/css';

const Agbs: React.FC = () => {

    return (
        <div className={"w-full pt-24"}>
            <h2 className="p-6 md:py-20 md:px-[15%] hyphens-manual">
                Allgemeine Geschäftsbedingungen
            </h2>
            <div>
                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">

                    <b>Anbieter:</b><br/><br/>
                    Alina, Wax, 26.11.2000<br/>
                    Michael-Pacher-Straße 38, 5020 Salzburg<br/><br/>
                    Lisa-Marie, Rader, 10.08.1999<br/>
                    Moserstraße 23e, 5020 Salzburg<br/><br/>
                    Philine, Hörnemann, 08.06.2000<br/>
                    Urstein Süd 3, 5412 Puch<br/><br/>
                    Julian, Fleig, 21.06.1997<br/>
                    Erentrudisstraße 19, 5020 Salzburg<br/><br/>
                    als hearow GesbR (im Folgenden „Anbieter“ genannt)<br/><br/>
                    E-Mail: <a className={"underline hover:text-orange-accent"} href="mailto:hearow.nav@gmail.com">hearow.nav@gmail.com</a><br/>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                <b>Präambel</b><br/>
                    Bei der „hearow App“ handelt es sich um einen Service, bei dem Kunden Navigationsdienstleistungen angeboten werden.
                    Dazu können sich Kunden die App auf ihrem Smartphone installieren und für die Freischaltung zusätzlicher Funktionen
                    registrieren oder die App als Gastnutzer verwenden. In der App, die den Standpunkt des Kunden (nachstehend auch: Vertragspartner)
                    ermittelt, lässt sich der gewünschte Zielort auswählen und wird der Kunde daraufhin an den gewünschten Zielort navigiert.<br/><br/>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                <b>1. Geltungsbereich</b><br/>
                    <ul className={"px-12"}>
                        <li className="list-decimal"> Der Anbieter schließt Verträge mit Unternehme(r)n und Verbrauchern ab. Allfälligen AGB des Vertragspartners wird
                            hiermit ausdrücklich widersprochen und werden solche AGB des Vertragspartners nicht akzeptiert.</li><br/>
                        <li className="list-decimal">Die nachstehenden Geschäftsbedingungen gelten für alle Leistungen (Service), die der Anbieter anbietet, und regeln
                            deren Inanspruchnahme.</li><br/>
                        <li className="list-decimal">Mit Vertragsabschluss akzeptiert der Vertragspartner auch ausdrücklich diese Geschäftsbedingungen, von denen
                            er Kenntnis erlangt hat.</li><br/>
                        <li className="list-decimal">Gegenüber Konsumenten gelten die nachstehenden Regelungen nur, sofern sie nicht zwingenden gesetzlichen Vorgaben
                            (insbes. Konsumentenschutzbestimmungen) entgegenstehen.</li><br/>
                        <li className="list-decimal">Einen integrativen Bestandteil dieser AGB stellen auch die Nutzungsbedingungen dar, welche unter
                            <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com/nutzungsbedingungen"> Nutzungsbedingungen </a>abrufbar sind.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>2. Vertragsabschluss und Bestellvorgang</b><br/>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Der Vertragspartner ist verpflichtet, im Rahmen des Vertragsabschlusses wahrheitsgemäße und vollständige Angaben zu machen.</li><br/>
                        <li className="list-decimal">Es besteht kein Recht auf Abschluss eines Vertrages. Der Anbieter ist berechtigt, einen Vertragsabschluss ohne Angabe von Gründen abzulehnen.</li><br/>
                        <li className="list-decimal">Vor der Bestellung ist eine Registrierung des Kunden erforderlich. Dazu muss der Kunde seine Daten in eine Onlinemaske eingeben. Die Anmeldung erfolgt mittels Zugangsdaten wie Benutzernamen und Passwort.</li><br/>
                        <li className="list-decimal">Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten und vor unbefugtem Zugriff Dritter zu schützen. Unautorisierte Nutzungen sind vom Kunden unverzüglich zu melden.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>3. Preis, Konditionen, Fälligkeit</b><br/>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Bei den Preisen handelt es sich um Bruttopreise, bei denen die gesetzliche Umsatzsteuer bereits inkludiert ist.</li><br/>
                        <li className="list-decimal">Angebote des Anbieters sind freibleibend.</li><br/>
                        <li className="list-decimal">Rechnungen sind sofort fällig, wenn nichts anderes vereinbart wurde.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>4. Zahlungsbedingungen, Annahmeverzug, Verzugszinsen und Mahn- und Betreibungskosten</b><br/>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Soweit nichts Gegenteiliges vereinbart, sind Forderungen des Anbieters gegenüber dem Kunden sofort nach Rechnungslegung
                            ohne Abzug zur Bezahlung fällig.</li><br/>
                        <li className="list-decimal">Bei Verzug durch den Kunden ist der Anbieter berechtigt,</li><br/>
                        <ul className={"px-12"}>
                            <li className="list-decimal">nach Wahl den Ersatz des tatsächlich entstandenen Schadens oder die gesetzlichen Verzugszinsen zu verrechnen;</li><br/>
                            <li className="list-decimal">Mahn- und Inkassokosten, soweit sie zur zweckentsprechenden Rechtsverfolgung notwendig sind, zu verrechnen;</li><br/>
                            <li className="list-decimal">Im Fall des Zahlungsverzugs des Kunden ab dem Tag der Übergabe der Ware auch Zinseszinsen zu verlangen.</li><br/>
                        </ul>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>5. Gewährleistung und Haftung</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Die Gewährleistung richtet sich nach den gesetzlichen Bestimmungen. </li><br/>
                        <li className="list-decimal">Soweit diese AGB oder das zwingende Recht nicht etwas anderes bestimmen, haftet der Anbieter nur für vorsätzliche oder grob fahrlässig verursachte Schäden. Diese Haftungsbeschränkung gilt nicht für Personenschäden oder für Schäden an zur Bearbeitung übernommenen Sachen. Im Falle von Schäden, die auf eine unsachgemäße Verwendung durch den Kunden zurückzuführen sind, haftet der Anbieter nicht.</li><br/>
                        <li className="list-decimal">Der Anbieter leistet keine Gewähr für eine ständige Verfügbarkeit seiner Leistungen (Service). Ausfallszeiten durch Wartungen, Software-Updates und aufgrund von Umständen (wie etwa technischen Problemen Dritter, höhere Gewalt), die nicht im Einflussbereich des Anbieters liegen und daher von ihm auch nicht zu vertreten sind und durch das von ihm angebotene Service über das Internet nicht erreichbar sind, können nicht ausgeschlossen werden. Der Vertragspartner erklärt, für Ausfälle keine Schadenersatz- und/oder Gewährleistungsansprüche geltend zu machen.</li><br/>
                        <li className="list-decimal">Der Anbieter übernimmt auch keine Gewähr dafür, dass das von ihm angebotene Service allen Anforderungen des Vertragspartners entspricht, mit anderen Programmen des Vertragspartners kompatibel ist oder dass alle Fehler behoben werden können. Die Gewährleistung ist überdies auf reproduzierbare (laufend wiederholbare) Mängel beschränkt. Kommt es aufgrund von technologisch zweckmäßigen Änderungen des Services des Anbieters zu Inkompatibilitäten beim Vertragspartner, so sind Ersatzansprüche gegen den Anbieter ausgeschlossen.</li><br/>
                        <li className="list-decimal">Von der Gewährleistung ausgeschlossen sind Mängel, die aus nicht vom Anbieter bewirkter, ungenügender Einrichtung, Nichtbeachtung der Installationserfordernisse und Benützungsbedingungen, Überbeanspruchung über die vom Anbieter angegebene Leistung, unrichtige Behandlung und Verwendung ungeeigneter Software oder anderer Betriebsmaterialien entstehen; dies gilt ebenso bei Mängeln, die auf vom Vertragspartner bestelltes Material oder Software zurückzuführen sind. Der Anbieter haftet nicht für Beschädigungen, die auf atmosphärische Entladungen, Überspannungen und chemische Einflüsse zurückzuführen sind.</li><br/>
                        <li className="list-decimal">Der Vertragspartner ist verpflichtet, den Anbieter von Unterbrechungen oder Störungen des Services unverzüglich zu informieren, um dem Anbieter, soweit der Anbieter dazu vertraglich verpflichtet ist, die Problembehebung zu ermöglichen, bevor der Vertragspartner Dritte – aus welchem Grund auch immer – mit der Problembehebung beauftragt. Verletzt der Vertragspartner diese Verständigungspflicht, übernimmt der Anbieter für dadurch verursachte Schäden und Aufwendungen des Vertragspartners (zB Kosten eines vom Vertragspartner beauftragten Dritten) keine Haftung.</li><br/>
                        <li className="list-decimal">Es wird darauf hingewiesen, dass bei kartografischen Daten, Verkehrsdaten, Wegbeschreibungen oder anderen Inhalten die auf der Karte dargestellten Ergebnisse und Inhalte von den tatsächlichen Verhältnissen abweichen können. Der Anbieter haftet für nicht. Die Nutzung des Service erfolgt nach eigenem Ermessen sowie auf eigenes Risiko und eigene Gefahr.</li><br/>
                        <li className="list-decimal">Soweit dies nicht gegen zwingendes Recht verstößt, haftet der Anbieter für den Ersatz von Schäden, die im Zusammenhang mit diesem Vertrag von ihm, seinen Mitarbeitern und/oder Erfüllungsgehilfen verursacht werden, nur für den Fall, dass diese Schäden grob fahrlässig oder vorsätzlich verursacht wurden. Die damit einhergehenden Haftungsbeschränkungen gelten jedoch nicht für den Ersatz von Personenschäden. Unbeschadet der Haftungsbeschränkung gem § 8.1. ist die Haftung des Anbieters für Folgeschäden, entgangenen Gewinn, Datenverlust und Vermögensschäden ausdrücklich ausgeschlossen.</li><br/>
                        <li className="list-decimal">Der Anbieter ist berechtigt, das Service, welches Gegenstand dieses Vertrages ist, zur Gänze oder teilweise stillzulegen, falls seine Sicherheit oder die Sicherheit von Vertragspartnern gefährdet ist. Dieses Recht des Anbieters besteht auch, falls der Weiterbetrieb des Services oder Teile des Services dem Anbieter wirtschaftlich nicht zumutbar ist. Der Anbieter wird den Vertragspartner von solchen Maßnahmen unverzüglich verständigen. Daraus entstehen dem Vertragspartner keine Ansprüche gegenüber dem Anbieter.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>6. Unabwendbare Ereignisse (höhere Gewalt)</b><br/>
                    Bei höherer Gewalt und anderen unverschuldeten Ereignissen, wie zB Kriege, Pandemien, Streiks, Betriebsstörungen und amtliche Verfügungen, ruhen die Liefer- und Abnahmeverpflichtungen, solange und soweit solche Hindernisse bestehen.
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>7. Erfüllungsgehilfen</b><br/>
                    Der Anbieter darf sich für seine Lieferverpflichtungen auch Dritter bedienen, ohne dass dadurch die Rechte und Pflichten des Kunden berührt werden.
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>8. Leistungen</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Die Leistungen (Service) des Anbieters umfassen:</li><br/>
                        <ul className={"px-12"}>
                            <li className="list-decimal">Bereitstellung des Services;</li><br/>
                            <li className="list-decimal">Bereitstellung der „hearow App“;</li><br/>
                        </ul>
                        <li className="list-none">Im Hinblick auf die technische und wirtschaftliche Entwicklung des Internets, auf gesetzliche Vorschriften oder auf gesetzlichen Anforderungen sowie auf die Weiterentwicklungen eigener und dritter Produkte ist der Anbieter jederzeit berechtigt, Änderungen an den von ihm erbrachten Leistungen (Service) vorzunehmen.</li><br/>
                    </ul>
                </p>


                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>9. Systemvoraussetzungen sowie Verpflichtungen und Obliegenheiten des Vertragspartners</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Für die eigene Infrastruktur (Soft- und Hardware etc) hat der Vertragspartner auf eigene Kosten und auf eigenes Risiko Sorge zu tragen, insbesondere hat er dafür Sorge zu tragen, dass die notwendigen Anschlüsse (zB für Datenleitungen) zur Verfügung stehen. Der Anbieter übernimmt für die Infrastruktur des Vertragspartners keine Verantwortung.</li><br/>
                        <li className="list-decimal">Der Vertragspartner hat dafür Sorge zu tragen, dass seine Infrastruktur (Soft- und Hardware etc) geeignet ist, das Service des Anbieters zu nutzen. Er hat die von ihm verwendete Software stets rechtzeitig und ordnungsgemäß zu warten oder warten zu lassen. Darüber hinaus hat er für Sicherheitskopien der bei ihm anfallenden Daten zu sorgen.</li><br/>
                        <li className="list-decimal">Um die Leistungen (Service) des Anbieters im vollen Umfang nutzen zu können, muss der Vertragspartner die technischen Vorgaben des Anbieters erfüllen.
                            Der Vertragspartner ist zum Schutz seines Anschlusses, seiner Endgeräte sowie seiner Zugangsdaten vor unbefugtem Zugriff verpflichtet. Der Vertragspartner nimmt zur Kenntnis,
                        </li><br/>
                        <ul className={"px-12"}>
                            <li className="list-decimal">dass das Speichern von Zugangsdaten (Benutzername, Passwort, Login-Kennung usw) und anderen geheimen Informationen auf der Festplatte eines PC nicht sicher ist;</li><br/>
                            <li className="list-decimal">dass durch das Abrufen von Daten aus dem Internet Viren, trojanische Pferde oder andere Komponenten auf sein Endgerät transferiert werden können, die sich auf seine Daten negativ auswirken können oder zum Missbrauch seiner Zugangskennungen führen können und dass dies durch „Hacker“ erfolgen kann.</li><br/>
                        </ul>
                        <li className="list-decimal">Der Vertragspartner hat die Zugangsdaten (Benutzername, Passwort, Login-Kennung usw) streng vertraulich zu behandeln und vor unberechtigtem Zugriff Dritter zu schützen. Er darf niemandem, auch nicht Mitarbeitern des Anbieters, diese Zugangsdaten zur Kenntnis bringen. Wenn der Vertragspartner Grund zur Annahme hat, dass die Zugangsdaten Dritten in irgendeiner Weise bekannt geworden sind, ist er verpflichtet, sein Passwort umgehend zu ändern. Der Vertragspartner ist verpflichtet, jeden Verdacht, dass seine Zugangsdaten oder andere geheime Informationen unbefugten Dritten bekannt geworden sein könnten, unverzüglich dem Anbieter zu melden.
                            Der Vertragspartner haftet für Schäden, die dem Anbieter durch mangelhafte Geheimhaltung der Zugangsdaten durch den Vertragspartner oder durch Weitergabe an Dritte, durch nicht rechtzeitige Meldung eines entsprechenden Verdachtes, dass Daten unbefugten Dritten bekannt geworden sein könnten, oder durch nicht erfolgte Absicherung seiner Endgeräte und Systeme entstehen.</li><br/>
                        <li className="list-decimal">Der Vertragspartner verpflichtet sich, die vom Anbieter erbrachten Leistungen (Service) bestimmungsgemäß zu nutzen und bei deren Nutzung Handlungen zu unterlassen, die Anbieter und/oder andere Vertragspartner schaden oder gefährden und/oder die die Verfügbarkeit der Leistungen (Service) für andere Vertragspartner einschränken könnten. Unter bestimmungsgemäße Nutzung fällt auch die Einhaltung aller Hinweise, Empfehlungen und ähnliches, die der Anbieter zum Zeitpunkt des Vertragsabschlusses oder danach dem Vertragspartner zur Verfügung gestellten Unterlagen ausführt.</li><br/>
                        <li className="list-decimal">Der Vertragspartner sichert zu, keine Daten in die Anbieter-Datenbank zu laden, die Viren (infizierte Software) oder Software und Inhalte, an denen Dritte Urheberrechte haben (es sei denn, der Vertragspartner hat die erforderlichen Rechte daran oder die Zustimmung des Berechtigten), enthalten.</li><br/>
                        <li className="list-decimal">Der Vertragspartner ist verpflichtet, sich laufend über die „hearow App“ oder die Homepage <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com">www.hearow-nav.com</a> des Anbieters über geplante Wartungsarbeiten zu informieren.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>10. Nutzungs- und Urheberrechte</b><br/>
                    Der Anbieter ist im Verhältnis zum Vertragspartner alleiniger Rechtsinhaber der Vervielfältigungs-, Verbreitungs-, Verarbeitungs- und sämtlicher Urheberrechte sowie des Rechts der unkörperlichen Übertragung und Wiedergabe der Anbieter-Datenbank sowie der einzelnen in ihr enthaltenen Inhalte. Die Nutzung der Anbieter-Datenbank und der darin enthaltenen Inhalte, Materialien sowie Marken- und Handelsnamen ist ausschließlich zu den in diesen Geschäftsbedingungen genannten Zwecken zulässig.
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>11. Dauer/Beendigung des Vertragsverhältnisses</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Dieser Vertrag wird unbefristet abgeschlossen. Er kann von beiden Seiten unter Einhaltung einer einmonatigen Kündigungsfrist zum Monatsletzten gekündigt werden. </li><br/>
                        <li className="list-decimal">Die Vertragsparteien sind berechtigt, diesen Vertrag bei Vorliegen eines wichtigen Grundes ohne Einhaltung einer Frist durch schriftliche Erklärung aufzulösen. </li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>12. Erfüllungsort/Gerichtsstand/Rechtswahl/Vertragssprache</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Erfüllungsort ist 5020 Salzburg.</li><br/>
                        <li className="list-decimal">Ausschließlicher Gerichtsstand für Rechtsstreitigkeiten aus und im Zusammenhang mit diesem Vertrag ist das sachlich zuständige Gericht in 5020 Salzburg. Bei Konsumenten gelten die gesetzlichen Bestimmungen. </li><br/>
                        <li className="list-decimal">Es kommt österreichisches Recht, mit Ausnahme der Verweisungsnormen des internationalen Privatrechtes (zB IPRG, Rom I VO etc) sowie des UN-Kaufrechtes zur Anwendung. Bei Konsumenten gelten die gesetzlichen Bestimmungen.</li><br/>
                        <li className="list-decimal">Die Vertragssprache ist Deutsch.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>13. Teilnichtigkeit</b><br/>
                    Sollten Bestimmungen dieses Vertrages rechtsunwirksam, ungültig und/oder nichtig sein oder im Laufe ihrer Dauer werden, so berührt dies die Rechtswirksamkeit und die Gültigkeit der übrigen Bestimmungen nicht. Die Vertragsteile verpflichten sich in diesem Fall, die rechtsunwirksame, ungültige und/oder nichtige (rechtsunwirksam, ungültig und/oder nichtig gewordene) Bestimmung durch eine solche zu ersetzen, die rechtswirksam und gültig ist und in ihrer wirtschaftlichen Auswirkung der ersetzten Bestimmung – soweit als möglich und rechtlich zulässig – entspricht.
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>14. Schlussbestimmungen</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Alle Erklärungen rechtsverbindlicher Art aufgrund dieses Vertrages haben schriftlich an die zuletzt schriftlich bekannt gegebene Adresse des jeweils anderen Vertragspartners zu erfolgen. Wird eine Erklärung an die zuletzt schriftlich bekannt gegebene Adresse übermittelt, so gilt diese dem jeweiligen Vertragsteil als zugegangen.</li><br/>
                        <li className="list-decimal">Die Bezeichnung der für die einzelnen Kapitel gewählten Überschriften dient einzig und allein der Übersichtlichkeit und ist daher nicht zur Auslegung dieses Vertrages heranzuziehen.</li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>15. Zustimmung gem § 107 TKG und Referenzmarketing</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Der unternehmerische Vertragspartner willigt ein, vom Anbieter oder von Unternehmen, die hierzu vom Anbieter beauftragt wurden, Nachrichten iSd § 107 Telekommunikationsgesetz (TKG) zu Werbezwecken zu erhalten. Diese Einwilligung kann vom Vertragspartner jederzeit widerrufen werden.</li><br/>
                        <li className="list-decimal">Weiters willigt der unternehmerische Vertragspartner ein, dass ihn der Anbieter zu Referenzzwecken nennen und zu diesem Zweck auch Logos vom Vertragspartner (zB Marken, Wort-Bild-Marken) verwenden darf. </li><br/>
                    </ul>
                </p>

                <p className="p-6 md:py-8 md:px-[15%] hyphens-manual">
                    <b>16. Verbraucherrechte</b>
                    <ul className={"px-12"}>
                        <li className="list-decimal">Rücktrittsrecht (KSchG)</li><br/>
                        <ul className={"px-12"}>
                            <li className="list-decimal">Hat der Verbraucher seine Vertragserklärung weder in den vom Anbieter für die geschäftlichen Zwecke dauernd benützten Räumen noch bei einem vom Anbieter dafür auf einer Messe oder einem Markt benützten Stand abgegeben, so kann er von seinem Vertragsantrag oder vom Vertrag zurücktreten.</li><br/>
                            <li className="list-decimal">Das Rücktrittsrecht besteht auch dann, wenn der Unternehmer oder ein mit ihm zusammenwirkender Dritter den Verbraucher im Rahmen einer Werbefahrt, einer Ausflugsfahrt oder einer ähnlichen Veranstaltung oder durch persönliches, individuelles Ansprechen auf der Straße in die vom Unternehmer für seine geschäftlichen Zwecke benützten Räume gebracht hat.</li><br/>
                            <li className="list-decimal">Dieser Rücktritt kann bis zum Zustandekommen des Vertrags oder danach binnen 14 Tagen erklärt werden. Der Lauf dieser Frist beginnt mit Zustandekommen des Vertrags, bei Kaufverträgen über Waren mit dem Tag, an dem der Verbraucher den Besitz an der Ware erlangt.</li><br/>
                            <li className="list-decimal">Das Rücktrittsrecht steht dem Verbraucher nicht zu,</li><br/>
                            <ul className={"px-12"}>
                                <li className="list-disc">wenn er selbst die geschäftliche Verbindung mit dem Unternehmer oder dessen Beauftragten zwecks Schließung dieses Vertrages angebahnt hat,</li><br/>
                                <li className="list-disc">wenn dem Zustandekommen des Vertrages keine Besprechungen zwischen den Beteiligten oder ihren Beauftragten vorangegangen sind,</li><br/>
                                <li className="list-disc">bei Verträgen, bei denen die beiderseitigen Leistungen sofort zu erbringen sind, wenn sie üblicherweise von Unternehmern außerhalb ihrer Geschäftsräume geschlossen werden und das vereinbarte Entgelt 25 Euro, oder wenn das Unternehmen nach seiner Natur nicht in ständigen Geschäftsräumen betrieben wird und das Entgelt 50 Euro nicht übersteigt,</li><br/>
                                <li className="list-disc">bei Verträgen, die dem Fern- und Auswärtsgeschäfte-Gesetz oder dem Versicherungsvertragsgesetz unterliegen, oder</li><br/>
                                <li className="list-disc">bei Vertragserklärungen, die der Verbraucher in körperlicher Abwesenheit des Unternehmers abgegeben hat, es sei denn, dass er dazu vom Unternehmer gedrängt worden ist.</li><br/>
                            </ul>
                            <li className="list-decimal">Der Verbraucher kann von seinem Vertragsantrag oder vom Vertrag weiters zurücktreten, wenn ohne seine Veranlassung für seine Einwilligung maßgebliche Umstände, die der Unternehmer im Zuge der Vertragsverhandlungen als wahrscheinlich dargestellt hat, nicht oder nur in erheblich geringerem Ausmaß eintreten. Solche maßgeblichen Umstände sind</li><br/>
                            <ul className={"px-12"}>
                                <li className="list-disc">die Erwartung der Mitwirkung oder Zustimmung eines Dritten, die erforderlich ist, damit die Leistung des Unternehmers erbracht oder vom Verbraucher verwendet werden kann,</li><br/>
                                <li className="list-disc">die Aussicht auf steuerrechtliche Vorteile,</li><br/>
                                <li className="list-disc">die Aussicht auf eine öffentliche Förderung und</li><br/>
                                <li className="list-disc">die Aussicht auf einen Kredit.</li><br/>
                            </ul>
                            Der Rücktritt kann in diesem Fall binnen einer Woche erklärt werden. Die Frist beginnt zu laufen, sobald für den Verbraucher erkennbar ist, dass die zuvor angeführten Umstände nicht oder nur in erheblich geringerem Ausmaß eintreten. Das Rücktrittsrecht erlischt jedoch spätestens einen Monat nach der vollständigen Erfüllung des Vertrags durch beide Vertragspartner, bei Bankverträgen mit einer ein Jahr übersteigenden Vertragsdauer spätestens einen Monat nach dem Zustandekommen des Vertrags.<br/><br/>
                            Das Rücktrittsrecht steht dem Verbraucher nicht zu, wenn<br/><br/>
                            <ul className={"px-12"}>
                                <li className="list-disc">er bereits bei den Vertragsverhandlungen wusste oder wissen musste, dass die maßgeblichen Umstände nicht oder nur in erheblich geringerem Ausmaß eintreten werden,</li><br/>
                                <li className="list-disc">der Ausschluss des Rücktrittsrechts im Einzelnen ausgehandelt worden ist,</li><br/>
                                <li className="list-disc">der Unternehmer sich zu einer angemessenen Anpassung des Vertrags bereit erklärt oder</li><br/>
                                <li className="list-disc">der Vertrag dem Versicherungsvertragsgesetz unterliegt.</li><br/>
                            </ul>
                            <li className="list-decimal">Die Erklärung des Rücktritts ist an keine bestimmte Form gebunden. Die Rücktrittsfrist ist gewahrt, wenn die Rücktrittserklärung innerhalb der Frist abgesendet wird. Die Kontaktdaten kann der Verbraucher diesen AGB entnehmen.</li><br/>
                            <li className="list-decimal">Tritt der Verbraucher vom Vertrag zurück, so hat Zug um Zug</li><br/>
                            <ul className={"px-12"}>
                                <li className="list-disc">der Unternehmer alle empfangenen Leistungen samt gesetzlichen Zinsen vom Empfangstag an zurückzuerstatten und den vom Verbraucher auf die Sache gemachten notwendigen und nützlichen Aufwand zu ersetzen,</li><br/>
                                <li className="list-disc">der Verbraucher die empfangenen Leistungen zurückzustellen und dem Unternehmer ein angemessenes Entgelt für die Benützung, einschließlich einer Entschädigung für eine damit verbundene Minderung des gemeinen Wertes der Leistung, zu zahlen; die Übernahme der Leistungen in die Gewahrsame des Verbrauchers ist für sich allein nicht als Wertminderung anzusehen.</li><br/>
                            </ul>
                            <li className="list-decimal">Ist die Rückstellung der vom Unternehmer bereits erbrachten Leistungen unmöglich oder untunlich, so hat der Verbraucher dem Unternehmer deren Wert zu vergüten, soweit sie ihm zum klaren und überwiegenden Vorteil gereichen</li><br/>
                        </ul>
                        <li className="list-decimal">Rücktrittsrecht (FAGG)</li><br/>
                        <i>Widerrufsbelehrung</i><br/><br/>
                        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.<br/><br/>
                        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.<br/><br/>
                        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns <a className={"underline hover:text-orange-accent"} href="mailto:hearow.nav@gmail.com">hearow.nav@gmail.com</a> mittels einer eindeutigen Erklärung (z. B. mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.<br/><br/>
                        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.<br/><br/>
                        <i>Folgen des Widerrufs</i><br/><br/>
                        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
                        eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.<br/><br/>
                        Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.<br/><br/>
                        <a className={"underline hover:text-orange-accent"} href="https://hearow-nav.com/widerrufsformular">Muster Widerrufsformular</a><br/><br/>
                        Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.<br/><br/>
                        <i>Ausnahmen vom Widerruf</i><br/><br/>
                        Auf die Ausnahmen vom Rücktrittsrecht gemäß § 18 FAGG wird hingewiesen. So besteht insbesondere dann kein Rücktrittsrecht, wenn der Unternehmer die Dienstleistung vollständig erbracht hat und der Verbraucher nach dem Vertrag zu einer Zahlung verpflichtet ist und der Unternehmer mit der vorherigen ausdrücklichen Zustimmung des Verbrauchers mit der Vertragserfüllung begonnen hat, sofern der Verbraucher vor Beginn der Dienstleistungserbringung bestätigt hat, zur Kenntnis genommen zu haben, dass er sein Rücktrittsrecht mit vollständiger Vertragserfüllung verliert. Ein Rücktrittsrecht entfällt ferner bei der Bereitstellung von digitalen Inhalten,
                        die nicht auf einem körperlichen Datenträger geliefert werden sollen, wenn der Unternehmer mit der Vertragserfüllung begonnen hat, wobei in jenen Fällen, in denen der Verbraucher nach dem Vertrag zu einer Zahlung verpflichtet ist, das Rücktrittsrecht nur entfällt, wenn überdies<br/><br/>
                        <ul className={"px-12"}>
                            <li className="list-disc">der Verbraucher dem Beginn der Vertragserfüllung vor Ablauf der Rücktrittsfrist ausdrücklich zugestimmt hat,</li><br/>
                            <li className="list-disc">der Verbraucher bestätigt hat, zur Kenntnis genommen zu haben, dass er durch den vorzeitigen Beginn der Vertragserfüllung sein Rücktrittsrecht verliert, und</li><br/>
                            <li className="list-disc">der Unternehmer dem Verbraucher eine Ausfertigung oder Bestätigung nach § 5 Abs. 2 oder § 7 Abs. 3 zur Verfügung gestellt hat. </li><br/>
                        </ul>
                    </ul>
                </p>

            </div>

            <Footer/>

        </div>
    )
}

export default Agbs;