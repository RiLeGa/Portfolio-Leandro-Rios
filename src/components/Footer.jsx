import { useState } from "react";
import './footer.css'
import logo from '../assets/logoLean.png'
import instaLogo from '../assets/instagram-svgrepo-com.svg'
import faceLogo from '../assets/facebook-svgrepo-com.svg'
import linkedLogo from '../assets/linkedin-svgrepo-com.svg'
import gitHubLogo from '../assets/github-square-svgrepo-com.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  const [status, setStatus] = useState("Enviar");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "3824e3b1-6c32-4870-b35d-2b84a9c37295");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("¡Mensaje enviado con éxito! Gracias por contactarme.");

      window.location.reload();
    } else {
      alert("Hubo un error al enviar. Por favor, intenta de nuevo.");
      setStatus("Error");
    }
  };

  return (
    <Container id="footerContainer" className="footerContainer">
      <h2 className='sectionTitle fotterTitle'> Contacto </h2>
        <section className="contactSection">
        <section className="logoSection">
            <img className="footerLogoLigth"/>
            <img className="footerLogo" src={logo} alt="Lean Logo" />
            <h2 className="nombreFooter">Leandro Rios</h2>
            <p>Desarrollador Web Fullstack</p>
        </section>
        <section className="formSection">
        <form className="contactForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Tu Nombre" required />
            <input type="email" name="email" placeholder="Tu Email" required />
            <textarea name="message" placeholder="¿En qué puedo ayudarte?" required></textarea>
            <button className="buttonContact" type="submit">{status} <button className="buttonContactLigth"></button></button>
        </form>
        </section>
        <section className="redesSection">
          <h2 className="sectionTitle socialTitle" >Redes Sociales</h2>
          <a className="linkRedes" href="">
            <div className="svgLigths"></div>
            <img className="svgLogo" src={linkedLogo} alt="" />
            <p>Leandro Rios Ga</p>
          </a>
          <a className="linkRedes" href="">
            <div className="svgLigths"></div>
            <img className="svgLogo" src={instaLogo} alt="" />
            <p>leandro_gers</p>
          </a>
          <a className="linkRedes" href="">
            <div className="svgLigths"></div>
            <img className="svgLogo" src={gitHubLogo} alt="" />
            <p>Leandro Rios Ga</p>
          </a>
          <a className="linkRedes" href="">
            <div className="svgLigths"></div>
            <img className="svgLogo" src={faceLogo} alt="" />
            <p>Leandro Rios</p>
          </a>
        </section>
      </section>
    </Container>
  );
}

export default Footer;