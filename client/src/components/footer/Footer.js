import React from 'react';
import './footer.css';
import './query.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(
    faHome
);

const home = <FontAwesomeIcon icon={faHome} />

const message = `built with javascript, react.js, node.js, & css.`

function Footer({ curPage, handlePageChange }) {
    return (
        <div className='footer-wrapper'>
            <a 
                href="#Home"
                onClick={() => handlePageChange('Homepage')}
                >
                <i className="fa-2x footer-icon footer-content btn-hvr">{home}</i>
            </a>

            <h2 className='footer-text footer-content'>
                {message}
            </h2>
        </div>
    );
};

export default Footer;
