import { useState } from "react";
import './footer.css'
import logo from '../assets/logoLean.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  const [status, setStatus] = useState("Enviar");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    
    const formData = new FormData(e.target);
    // Tu Access Key de Web3Forms o similar
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
        <section className="logoSection">
            <img className="footerLogo" src={logo} alt="Lean Logo" />
            <h2>Lean Rios</h2>
            <p>Desarrollador Web Fullstack</p>
        </section>
        <section className="redesSection">
            <img className="svgLogo" src="src/assets/facebook-svgrepo-com.svg" alt="" />
            <img className="svgLogo" src="src/assets/instagram-svgrepo-com.svg" alt="" />
            <img className="svgLogo" src="src/assets/linkedin-svgrepo-com.svg" alt="" />
        </section>
        <section className="formSection">
        <form className="contactForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Tu Nombre" required />
            <input type="email" name="email" placeholder="Tu Email" required />
            <textarea name="message" placeholder="¿En qué puedo ayudarte?" required></textarea>
            <button type="submit">{status}</button>
        </form>
        </section>
    </Container>
  );
}

export default Footer;