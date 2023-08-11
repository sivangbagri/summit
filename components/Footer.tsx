// components/Footer.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";



const Footer: React.FC = () => {

  return (
    <section className="mt-10">

        <div className="justify-content mx-auto h-auto w-11/12 gap-14 md:flex">
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold text-center text-primary">E-Cell IIT BHU</h4>
            <div className="w-1/3 h-3 bg-teal-600 rounded relative">
              <span></span>
            </div>
            <Link href="/">
              <Image width={200} height={200} src="/E-cell.png" alt="logo"/>
            </Link>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold text-center text-primary">Contact Us</h4>
            <div className="w-1/3 h-3 bg-teal-600 rounded relative">
              <span></span>
            </div>
            <p className=" mt-5 text-center">
            Indian Institute of Technology<br/>
            (Banaras Hindu University)<br/>
            Varanasi, India<br/>
            PIN: 221005<br/>

            ✉️ecell@iitbhu.ac.in<br/>
            📞+91 9120787959</p>
         </div>
         <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold text-center text-primary">Quick Links</h4>
            <div className="w-1/3 h-3 bg-teal-600 rounded relative">
              <p></p>
            </div>
            <div className="text-left pl-20">
            <div><a href="/home">Home</a></div> 
        <div className="py-2"><a href="/about">About </a></div>
        <div className="pb-2"><a href="/guide">Guide</a></div>
        <div className="pb-2"><a href="/blog">Blogs</a></div>
        <div className="pb-2"><a href="/contact">Contact</a></div>
         </div>
         </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <div className="font-bold text-center text-primary">Connect with Us
        <div className="w-1/3 h-3 bg-teal-600 rounded relative">
          <span></span>
        </div>
      </div>
      <div className="flex justify-start m-5 p-0"></div>
      <div className="text-base h-12 w-12 inline-block text-center rounded">
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
      </div>
      </div>
    </section>
  );
};

export default Footer;
