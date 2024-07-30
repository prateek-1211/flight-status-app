import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-first">
                <h3>Indigo Airlines</h3>
            </div>
            <hr />
            <div className="footer-second">
                <ul>
                    <li>COMPANY</li>
                    <li>SUPPORT</li>
                    <li>QUICK LINKS</li>
                    <li>MEDIA</li>
                    <li>DOWNLOAD APP</li>
                </ul>
            </div>
            <div className="footer-rights">
            @Copyright 2024 IndiGo All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
