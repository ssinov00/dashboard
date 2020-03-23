import React from "react";
import Styles from "./menu.module.scss";
import logoDesktop from '../assets/logo_desktop.svg';
import logoMobile from '../assets/logo_mobile.svg';
import Media from 'react-media';

const Menu = () => {

	return (
        <header className={Styles.menu}>
            <div className={Styles.logo}>

            <Media query="(orientation: portrait)">
                {matches =>
                    matches ? (
                    <img src={logoMobile} className="appLogo" alt="logo" />
                    ) : (
                    <img src={logoDesktop} className="appLogo" alt="logo" />
                    )
                }
            </Media>
                
            </div>
            <div className={Styles.name}>
                Dashboard Task
            </div>

        </header>
	);
};

export default Menu;
