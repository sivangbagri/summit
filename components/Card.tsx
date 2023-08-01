import React from "react";
import { type Icon, Icons } from "@/components/icons";

interface CardProps {
  className: string;
  href: string;
  iconName: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  className,
  href,
  iconName,
  title,
  description,
}) => {
  const isDark = className === "card--dark";

  return (
    <div
      className={`card ${className} ${
        isDark ? "text-white bg-black" : "text-black"
      }`}
    >
      <a
        href={href}
        className={`card--link block p-8 rounded-lg transition duration-200 ${
          isDark ? "border-black" : "border"
        } hover:transform hover:translate-x-[-30px] hover:translate-y-[-30px] hover:border-blue-500`}
      >
        <div className="card--display">
          <i
            className={`material-icons text-6xl mb-8 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {/*<Icons.{iconName} />*/}
          </i>
          <h2 className={`text-2xl ${isDark ? "text-white" : "text-black"}`}>
            {title}
          </h2>
        </div>
        <div
          className={`card--hover hidden ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          <h2 className="text-2xl">{title}</h2>
          <p className="text-base font-normal">{description}</p>
          <p className="text-base font-normal link text-blue-500">
            Click to see project
          </p>
        </div>
      </a>
      <div className="card--border absolute inset-0 border-dashed border-black z-[-1]"></div>
    </div>
  );
};

export default Card;
