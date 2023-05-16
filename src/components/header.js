import React from "react";
import Logo from "../img/logo.svg"
import "../css/header.css"

export default function Header(){
    return(
        <>
            <section className="header">

                <img src={Logo} className="header__logo" />
                <a className="button">Join Beta</a>

            </section>
        </>
    )
}
