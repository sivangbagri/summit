import React from 'react'
import { images } from '../ui/Photos'
import Person from '../ui/Person'
export const Trailblazzers = () => {
  return(
    <div className='container  mx-auto px-6 md:px-12'>
      <div className='mb-16 md:w-2/3 lg:w-1/2 mx-auto'>
        <h2 className='mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl text-center'>
          Some of our guests
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Tailus prides itself not only on award-winning technology, but also on the talent of its
          people of some of the brightest minds and most experienced executives in business.
        </p>
      </div>
      <div className='grid gap-6 px-4 sm:py-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

        {images.map((image,index)=>(
          <Person key={index} name={image.name} company={image.company} imageUrl={image.imageUrl}/>
        ))}
    </div>
   </div>
    )

}