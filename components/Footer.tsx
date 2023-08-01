// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-200">
      <div className="footer-container container flex justify-between">
        <a className="logo-link">
          <img
            className="footer-logo"
            width="46"
            height="46"
            alt="Logo"
            src="https://cdn.openart.ai/stable_diffusion/50694a4111aeb8cc7286d52b7306942a140343b8_2000x2000.webp"
          />
        </a>
        <ul className="footer-menu">
          <li className="footer-item">
            <a className="menu-link" href="#">
              О преподавателе
            </a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">
              О курсе
            </a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">
              Тарифы
            </a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">
              Отзывы
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
