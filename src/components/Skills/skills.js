import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Usluge</span>
            <span className="skillDesc">Ja sam vešt i strastveni dizajner veb sajta sa iskustvom u kreiranju vizualno privlačnih i korisnički prijateljskih veb sajtova. Imam snažno razumevanje dizajna i oštro oko za detalje. Vrsno se snalazim u HTML, CSS i JavaScript, kao i u dizajn softverima poput Adobe Photoshop i Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDizajn" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Dizajn</h2>
                        <p>Ovo je demo tekst, možete napisati svoj sadržaj ovde.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="DizajnVebSajta" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Dizajn Veb Sajta</h2>
                        <p>Ovaj demo tekst može biti promenjen prilikom pravljenja veb sajta za produkciju.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="DizajnAplikacije" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Dizajn Aplikacije</h2>
                        <p>Možete pisati tekst vezan za razvoj mobilnih aplikacija.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
