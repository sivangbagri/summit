import React from "react";
import { images } from "../ui/Photos";
import Person from "../ui/Person";
export const Trailblazzers = () => {
  return (
    <div id={"Speakers"} className="container  mx-auto px-6 md:px-48">
      <div className="mb-16 md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl text-center">
          IIT BHU Trailblazers
        </h2>
      </div>
      <div className="grid gap-6 px-4 sm:py-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {images.map((image, index) => (
          <Person
            key={index}
            name={image.name}
            company={image.company}
            imageUrl={image.imageUrl}
            quote={image.quote}
            position={image.position}
          />
        ))}
      </div>
    </div>
  );
};
