import Link from "next/link";
import React from "react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const footerStyled = {
    backgroundColor: "#198754",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: "aliceblue",
  };
  const appsStyled = {
    display: "flex",
    gap: "10px",
  };
  const iconStyled = {
    fontSize: "40px",
    backgroundColor: "#0d5a36",
    borderRadius: "100%",
    padding: "10px",
  };
  return (
    <footer style={footerStyled}>
      <p>Siga a Câmara nas redes sociais</p>
      <div style={appsStyled}>
        <Link target="_blank" href="https://t.me/CamaradosDeputados">
          <FaTelegramPlane style={iconStyled} />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/camaradeputados">
          <FaFacebookF style={iconStyled} />
        </Link>
        <Link target="_blank" href="https://twitter.com/camaradeputados">
          <FaTwitter style={iconStyled} />
        </Link>
        <Link target="_blank" href="https://www.tiktok.com/@camaradosdeputados">
          <FaTiktok style={iconStyled} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/camaradeputados/">
          <FaInstagram style={iconStyled} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
