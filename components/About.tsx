import React from "react";

export const About = () => {
    return (
        <div
        id="about"
        className="relative w-full bg-linear-90 from-violet to-blue text-white"
        >
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7 flex flex-col lg:block items-center">
                    <h2 className="font-bold uppercase tracking-wide text-4xl sm:text-5xl md:text-6xl">
                        Over mij
                    </h2>

                    <div className="mt-10 space-y-6 max-w-prose text-white/90 text-base sm:text-lg leading-relaxed">
                        <p className="text-base">
                            Mijn naam is Kevin van Bommel en ik heb al enkele jaren ervaring als front-end
                            webdeveloper. Ik ben begonnen als junior, maar inmiddels heb ik ruime ervaring
                            opgedaan met React, JavaScript, HTML, CSS, WordPress, Vue.js en Next.js.
                        </p>
                        <p className="text-base">
                            Ik werk gestructureerd, hou van clean code en denk altijd mee over de
                            gebruikerservaring. Dankzij mijn brede technische kennis kan ik snel schakelen
                            tussen verschillende frameworks en projecten. Ik ben leergierig, oplossingsgericht
                            en lever met trots werk af dat er niet alleen goed uitziet, maar ook écht goed
                            functioneert.
                        </p>
                    </div>

                    <div className="mt-9 grid sm:grid-cols-3">
                        <div>
                            <p className="text-green font-bold uppercase">
                            Geboortedatum
                            </p>
                            <p className="mt-2 text-2xl font-extrabold uppercase">
                            15-04-2001
                            </p>
                        </div>
                        <div>
                            <p className="text-green font-bold uppercase">
                            Geboorteplaats
                            </p>
                            <p className="mt-2 text-2xl font-extrabold uppercase">
                            Oud-Beijerland
                            </p>
                        </div>
                        <div>
                            <p className="text-green font-bold uppercase">Status</p>
                            <p className="mt-2 text-2xl font-bold uppercase">Ongehuwd</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 lg:pl-12 flex flex-col lg:block items-center">
                    <h3 className="font-extrabold uppercase tracking-wide text-3xl sm:text-4xl md:text-5xl">Hobby's</h3>

                    <ul className="flex gap-12 mt-10 space-y-8">
                    <li className=" gap-4">
                        <img src="/assets/icon-games.svg" />
                        <span className="text-xl sm:text-2xl font-bold uppercase">Games</span>
                    </li>
                    <li className="items-center gap-4">
                        <img src="/assets/icon-creativity.svg" />
                        <span className="text-xl sm:text-2xl font-bold uppercase">Creativiteit</span>
                    </li>
                    </ul>
                    <ul className="flex gap-12 mt-10 space-y-8">
                    <li className="items-center gap-4">
                        <img src="/assets/icon-films.svg" />
                        <span className="text-xl sm:text-2xl font-bold uppercase">Films</span>
                    </li>
                    <li className="items-center gap-4">
                        <img src="/assets/icon-research.svg" />
                        <span className="text-xl sm:text-2xl font-bold uppercase">Research</span>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};
