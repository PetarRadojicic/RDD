import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './contact.css';
import Tesla from '../../assets/Tesla.png';
import ICD from '../../assets/IC&D.png';
import Factory from '../../assets/factory.jpg';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aobzzal', 'template_3xure8u', form.current, 'xIFG4VCfji1slrmAd')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email poslat!');
            }, (error) => {
                console.log(error.text);
            });
    };
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 3.8 } },
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Saradnja</h1>
                <span className="clientDesc">
                    Imao sam priliku da sarađujem sa raznovrsnim grupama kompanija.
                    Neke od značajnih kompanija sa kojima sam sarađivao uključuju
                </span>
                <div className="clientImgs">
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <motion.img ref={ref} src={Tesla} alt="Klijent" className="clientImg" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                        )}
                    </InView>
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <motion.img ref={ref} src={ICD} alt="Klijent" className="clientImg" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                        )}
                    </InView>
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <motion.img ref={ref} src={Factory} alt="Klijent" className="clientImg" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                        )}
                    </InView>            
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Kontaktirajte me</h1>
                <span className="contactDesc">Molimo popunite formu ispod kako biste razgovarali o mogućnostima za rad.</span>
                <InView threshold={0.2} triggerOnce>
                    {({ inView, ref }) => (
                        <motion.form ref={ref} className="contactForm" onSubmit={sendEmail} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
                            <input type="text" className="name" placeholder='Vaše ime' name='from_name' />
                            <input type="text" className="email" placeholder='Vaš Email' name='from_email' />
                            <textarea name="message" placeholder='Vaša poruka' rows={5} className='msg'></textarea>
                            <button type="submit" value="Send" className='submitBtn'>Pošalji</button>
                            <div className="links">
                                <motion.img src={facebookIcon} alt="Facebook" className="link" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                                <motion.img src={twitterIcon} alt="Twitter" className="link" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                                <motion.img src={youtubeIcon} alt="YouTube" className="link" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                                <motion.img src={instagramIcon} alt="Instagram" className="link" initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} />
                            </div>
                        </motion.form>
                    )}
                </InView>
            </div>
        </div>
    );
}

export default Contact;
