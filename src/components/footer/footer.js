import React from "react";
import Styles from "./footer.module.scss";
import logo from '../assets/logo_desktop.svg';

const Footer = () => {

	return (
        <footer className={Styles.footer}>
            <div className={Styles.logo}>
                <img src={logo} className="appLogo" alt="logo" />
            </div>
            <div className={Styles.name}>
                Dashboard Task
            </div>
            <div className={Styles.creator}>
                Stela Sinovcic
            </div>

        </footer>
	);
};

export default Footer;
