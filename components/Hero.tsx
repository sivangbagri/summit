import React from "react";

const Home: React.FC = () => {
  return (
    <section className="bg-pink-200 flex items-center justify-between min-h-screen p-6">
      <div className="w-1/2">
        <div className="space-y-4">
          <div className="underline-dashed text-4xl md:text-6xl font-semibold font-alphasl font-display">
            IT's always TIME <br /> 4 some BRUTA
            <span className="leading-tight">L</span> • ISM
          </div>
          <p className="text-lg md:text-xl border-4 border-black p-6 max-w-2xl">
            Grim-visaged to
            <span className="relative">
              <span className="absolute w-4 h-2 bg-black top-1/2 transform -translate-y-1/2"></span>
            </span>{" "}
            merry ##### meetings, our brows bound
            <span className="relative">
              <span className="absolute w-4 h-2 bg-black top-1/2 transform -translate-y-1/2"></span>
            </span>{" "}
            with deep bosom of York.
          </p>
          <div className="space-x-4">
            <button className="text-xl font-bold underline border-4 border-black p-4 transition-transform transform hover:-translate-x-3 hover:-translate-y-3">
              Brutto!
            </button>
            <button className="text-xl font-bold underline border-4 border-black p-4 transition-transform transform hover:rotate-3">
              #bruttobrutto ☞
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img
          className="w-4/5 h-full object-cover border-6 border-black shadow-2xl transition-transform transform hover:rotate-3 hover:filter"
          src="https://cdn.openart.ai/stable_diffusion/50694a4111aeb8cc7286d52b7306942a140343b8_2000x2000.webp"
          alt="Artwork"
        />
        <div className="absolute bottom-[-40px] right-[55px] w-75 h-90 bg-gradient-to-br from-transparent to-black">
          <div className="w-10 h-10 bg-gradient-to-br from-transparent to-black transform rotate-[-45deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
