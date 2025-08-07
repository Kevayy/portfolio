import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full flex flex-col-reverse items-center justify-center min-h-[80vh] px-4 py-12 lg:flex-row lg:justify-start lg:items-center lg:px-0 overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 rounded-xl lg:ml-10 ">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-white drop-shadow">
          KEVIN VAN BOMMEL
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-medium mt-2 ">
          <span className="text-green-400">WEB</span> <span className="text-blue-800">DEVELOPER</span>
        </p>
        <p className="mt-6 sm:mt-8 lg:mt-12 font-light text-base sm:text-lg md:text-xl lg:text-2xl max-w-md text-white">
          Software Developer. Nieuwsgierig, zowel zelfstandig als een
          teamplayer.
        </p>
      </div>
      <div className="flex justify-center items-center mb-8 lg:mb-0 lg:ml-32">
        <Image
          src="/assets/foto-kevin.png"
          alt="Hero Image"
          className="rounded-full shadow-xl border-4"
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
};
