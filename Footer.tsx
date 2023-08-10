// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center overflow-hidden bg-gray-50 dark:bg-gray-900 py-20 md:py-40">
<div className="container relative z-[1] m-auto px-6 md:px-12">
  <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
    <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
      <div
        className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start"
      >
        <ul className="list-inside list-disc space-y-8">
          <li><a href="#" className="transition hover:text-primary">Home</a></li>

          <li><a href="#" className="transition hover:text-primary">About</a></li>
          <li><a href="#" className="transition hover:text-primary">Guide</a></li>
          <li><a href="#" className="transition hover:text-primary">Blocks</a></li>
          <li><a href="#" className="transition hover:text-primary">Contact</a></li>
          <li><a href="#" className="transition hover:text-primary">Terms of Use</a></li>
        </ul>

        <ul role="list" className="space-y-8">
          <li>
            <a href="https://www.linkedin.com/company/ecelliitbhu/" className="flex items-center space-x-3 transition hover:text-primary">
                <Icons.linkedin/>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ecelliitbhu" className="flex items-center space-x-3 transition hover:text-primary">
            <Icons.twitter/>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCUme5nNmSKY1GiUBUhlAnOQ" className="flex items-center space-x-3 transition hover:text-primary">
            <Icons.youtube/>
              <span>YouTube</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ecelliitbhu/" className="flex items-center space-x-3 transition hover:text-primary">
            <Icons.instagram/>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left"
      >
        <span className="flex justify-between text-white">
        </span>

      </div>
    </div>
  </div>
</div>
</footer>
  );
};

export default Footer;
