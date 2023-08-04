// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="footer-container container flex justify-between">
        <Link className="logo-link" href={"/"}>
          <img
            className="footer-logo"
            width="46"
            height="46"
            alt="Logo"
            src="https://cdn.openart.ai/stable_diffusion/50694a4111aeb8cc7286d52b7306942a140343b8_2000x2000.webp"
          />
        </Link>
        <ul className="footer-menu">
          <li className="footer-item">
            <Link
              className="menu-link"
              href="https://www.linkedin.com/company/ecelliitbhu/"
              target={"_blank"}
            >
              <Icons.linkedin />
            </Link>
          </li>
          <li className="footer-item">
            <Link
              className="menu-link"
              target={"_blank"}
              href="https://twitter.com/ecelliitbhu"
            >
              <Icons.twitter />
            </Link>
          </li>
          <li className="footer-item">
            <Link
              className="menu-link"
              target={"_blank"}
              href="https://www.youtube.com/channel/UCUme5nNmSKY1GiUBUhlAnOQ"
            >
              <Icons.youtube />
            </Link>
          </li>
          <li className="footer-item">
            <Link
              className="menu-link"
              href="https://www.instagram.com/ecelliitbhu/"
              target={"_blank"}
            >
              <Icons.instagram />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
