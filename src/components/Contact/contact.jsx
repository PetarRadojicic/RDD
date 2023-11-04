import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
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
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Kontaktirajte me</h1>
                <span className="contactDesc">Molimo popunite formu ispod kako biste razgovarali o mogućnostima za rad.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Vaše ime' name='from_name' />
                    <input type="text" className="email" placeholder='Vaš Email' name='from_email' />
                    <textarea name="message" placeholder='Vaša poruka' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Pošalji</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;