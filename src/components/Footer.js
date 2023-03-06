import React from "react";
import "./Footer.scss"
import logo from "../assets/images/logo-disney.svg"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
         <img src={logo} alt="" />
      </div>
      <div className="footer-data-container-1">
         <ul>
            <li>Règles de Respect de la Vie Privée</li>
            <li>Modalités relatives aux cookies</li>
            <li>Droits Données dans l'UE et au R-U</li>
            <li>À propos de Disney+</li>
            <li>Conditions générales d'abonnement</li>
            <li>Aide</li>
            <li>Appareils compatibles</li>
            <li>Qui sommes-nous</li>
         </ul>
      </div>
      <div className="footer-data-container-2">
         <ul>
            <li>Publicités ciblées par centres d'intérêt</li>
            <li>Gérer vos préférences</li>
         </ul>
      </div>
    </div>
  );
};

export default Footer;
