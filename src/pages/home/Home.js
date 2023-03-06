import React from "react";
import Navbar from "../../components/Navbar";
import "./home.scss"
import logo from "../../assets/images/logo-disney.svg"

const Home = () => {
  return (
    <div className="body-content">
      {/* <Navbar /> */}
      <div className="background-image"></div>
      <section className="hero">
        <div className="hero-container">
          <img src={logo} alt="" />
          <h1>Tout ce que vous imaginez et encore +</h1>
          <p>Entrez votre adresse e-mail pour commencer ou réactiver votre abonnement.</p>
          <div className="form-container">
            <input type="email" placeholder="Adresse email" className="email-home"/>
            <input type="submit" className="btn-submit" value="Continuer"/> 
          </div>
          <p>Profitez de 12 mois au prix de 10 quand vous souscrivez un abonnement Disney+ annuel. Économies par rapport à un an d'abonnement mensuel.</p>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
