import { StaticImageData } from 'next/image';
import  Image  from 'next/image';

import React from 'react'
interface PersonProps {
  name: string;
  company: string;
  imageUrl: StaticImageData;
}
const Person:React.FC<PersonProps> = ({name,company,imageUrl}) => {
  return (
    
      <div className='group relative rounded-3xl space-y-6 overflow-hidden'>
        <Image
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={imageUrl}
          alt="woman"
          loading="lazy"
          width="600"
          height="800"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{name}</h4>
            <span className="block text-sm text-gray-500">CEO-Founder</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">{company}</p>
        </div>
      </div>

    
  
  )
}

export default Person