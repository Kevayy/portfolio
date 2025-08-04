export default function Hero() {
    return (
        <section id="hero" className="h-screen flex items-center justify-left ml-44">
            <div className="">
                <h1 className="font-bold uppercase">Kevin van Bommel</h1>
                <p className="text-7xl font-medium uppercase">Web Developer</p>
                <p className="mt-16">Applicatieontwikkelaar. Nieuwsgierig, zowel zelfstandig als een teamplayer.</p>
            </div>
            <img src={"/assets/foto-kevin.png"} alt="Hero Image" className="ml-32" />
        </section>
    )
}