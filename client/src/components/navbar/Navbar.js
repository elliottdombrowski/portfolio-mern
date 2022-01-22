import { React } from 'react';
import './navbar.css';
import './query.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faGithub, faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

library.add(
    faGithub,
    faLinkedin,
    faFacebook,
    faInstagram,
    faTwitter,
    faBell
);

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const facebook = <FontAwesomeIcon icon={faFacebook} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const bell = <FontAwesomeIcon icon={faBell} />

function Navbar({ curPage, handlePageChange }) {
    const mobileMenu = () => {
        document.getElementById('burger').classList.toggle('active');
        document.getElementById('nav-right').classList.toggle('active');
    };

    window.onscroll = () => {
      document.getElementById('burger').classList.remove('active');
      document.getElementById('nav-right').classList.remove('active');
    }

    const navClick = () => {
        let nav = document.getElementById('nav-right');
        let burger = document.getElementById('burger');
        if (nav.classList.contains('active') && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        };
    };

    const toggleMedia = () => {
        let bell = document.getElementById('bell');
        let media = document.getElementById('media-show');
        bell.classList.toggle('active');
        media.classList.toggle('active');
        if (media.classList.contains('media-hide')) {
            $('#media-show').fadeIn(1000);
            media.classList.add('media-fade-in');
            media.classList.remove('media-hide');
            return;
        }
        if (bell.classList.contains('active')) {
            $('#media-show').fadeIn(1000);
        } else if (!bell.classList.contains('active')) {
            $('#media-show').fadeOut(1000);
        };
    };

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-left'>
                <div className='bell-wrapper' id="bell">
                    <i className="fa-2x icon-hvr btn-hvr" onClick={() => toggleMedia()}>{bell}</i>
                </div>

                <div className='social-icons media media-hide' id="media-show">
                    <a target="_blank" rel="noreferrer" href="https://github.com/elliottdombrowski">
                        <i className="fa-2x media-nav icon-hvr btn-hvr">{github}</i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elliott-dombrowski-8b2ba8211/">
                        <i className="fa-2x media-nav icon-hvr btn-hvr">{linkedin}</i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/elliott.dombrowski/">
                        <i className="fa-2x media-nav icon-hvr btn-hvr">{facebook}</i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_roger_workman_/">
                        <i className="fa-2x media-nav icon-hvr btn-hvr">{instagram}</i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/dupagewasteland">
                        <i className="fa-2x media-nav icon-hvr btn-hvr">{twitter}</i>
                    </a>
                </div>
            </div>

            <div className='navbar-right' id="nav-right">
                <a 
                    href="#about"
                    onClick={() => {
                        handlePageChange('About');
                        navClick();
                    }}>
                    <p className='nav-item btn-hvr'>about</p>
                </a>
                <a 
                    href="#work"
                    onClick={() => {
                        handlePageChange('Work');
                        navClick();
                    }}>
                    <p className='nav-item btn-hvr'>work</p>
                </a>
                <a 
                    href="#contact"
                    onClick={() => {
                        handlePageChange('Contact');
                        navClick();
                    }}>
                    <p className='nav-item btn-hvr'>contact</p>
                </a>
            </div>

            <div className='hamburger' id="burger" onClick={() => mobileMenu()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Navbar;