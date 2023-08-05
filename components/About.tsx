import React from "react";
import demo1 from "@/public/assets/demo1.svg"
import women from "@/public/assets/woman.jpg"
import women1 from "@/public/assets/woman1.jpg"
import man from "@/public/assets/man.jpg"


import Image from "next/image";
const  About:React.FC=()=>{
    return(

        <div >
            <div className="container mx-auto px-6 text-center md:px-12">
                <div className="mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                       About
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                        Tailus prides itself not only on award-winning technology, but also on the talent of its
                        people of some of the brightest minds and most experienced executives in business.
                    </p>
                </div>
                <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
                    <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                        <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                            <Image
                                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                src={women}
                                alt="woman"
                                loading="lazy"
                                width="640"
                                height="805"
                            />
                        </div>
                        <div className="space-y-4 text-center">
                            <div>
                                <h4 className="text-2xl text-gray-700 dark:text-white">Hentoni Doe</h4>
                                <span className="block text-sm text-gray-500">CEO-Founder</span>
                            </div>
                            <a href="#" className="mx-auto block w-max text-primary">View Bio</a>
                        </div>
                    </div>

                    <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                        <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                            <Image
                                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                src={women1}
                                alt="woman"
                                loading="lazy"
                                width="1000"
                                height="667"
                            />
                        </div>
                        <div className="space-y-4 text-center">
                            <div>
                                <h4 className="text-2xl text-gray-700 dark:text-white">Anabelle Doe</h4>
                                <span className="block text-sm text-gray-500">Chief Operations Officer</span>
                            </div>
                            <a href="#" className="mx-auto block w-max text-primary">View Bio</a>
                        </div>
                    </div>

                    <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                        <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                            <Image
                                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                src={man}
                                alt="man"
                                loading="lazy"
                                width="1000"
                                height="667"
                            />
                        </div>
                        <div className="space-y-4 text-center">
                            <div>
                                <h4 className="text-2xl text-gray-700 dark:text-white">Jonathan Doe</h4>
                                <span className="block text-sm text-gray-500">Chief Technical Officer</span>
                            </div>
                            <a href="#" className="mx-auto block w-max text-primary">View Bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default About;
