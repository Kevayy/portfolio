import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full flex flex-col-reverse justify-center min-h-[80vh] px-4 py-12 lg:flex-row lg:justify-start lg:items-center lg:px-0 overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 rounded-xl lg:ml-10 ">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-white drop-shadow uppercase">
          Kevin van Bommel
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-medium mt-2 uppercase">
          <span className="text-green">Web</span> <span className="text-blue">Developer</span>
        </p>
        <div className="mt-8 h-2.5 bg-linear-90 from-violet via-blue to-green self-center lg:self-start shrink-0 grow-0 basis-auto w-96 sm:w-64 md:w-80 lg:w-[564px] max-w-full" />        <p className="mt-6 lg:mt-10 font-light text-white leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl break-words">
          Applicatieontwikkelaar. Nieuwsgierig, zowel zelfstandig als een teamplayer.
        </p>
      </div>
      <div className="flex justify-center items-center mb-8 lg:mb-0 lg:ml-32">
        <Image
          src="/assets/foto-kevin.png"
          alt="Hero Image"
          className="rounded-full shadow-xl border-4"
          width={384}
          height={384}
          priority
        />
      </div>
    </div>
  );
};
