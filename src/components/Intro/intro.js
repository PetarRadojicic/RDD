import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Zdravo,</span>
                <span className="introText">Ja sam <span className="introName">Petar</span> <br />Web Dizajner/Programer</span>
                <p className="introPara">Ja sam vešt veb programer sa iskustvom u kreiranju<br />vizualno privlačnih i korisnički prijateljskih veb sajtova.</p>
                <Link><button className="btn"><img src={btnImg} alt="Zaposli" className='btnImg'/>Skini moj</button></Link>
            </div>
            <img src={bg} alt="Profil" className="bg" />
        </section>
    );
}

export default Intro;
