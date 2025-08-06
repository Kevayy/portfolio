'use client';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full text-white px-24 py-6 z-50 shadow-md">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img
                        src="/assets/KVB_Logo_Diapositief.svg"
                        alt="Kevin van Bommel Logo"
                        width={324}
                        height={102}
                    />
                </div>
                <ul className='flex space-x-12 items-center text-sm font-medium uppercase'>
                    <li><a href="#about" className="hover:text-blue-400">Over mij</a></li>
                    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#education" className="hover:text-blue-400">Opleiding</a></li>
                    <li><a href="#experience" className="hover:text-blue-400">Werkervaring</a></li>
                </ul>

                <a href="#contact" className="ml-12 px-6 py-2 rounded-md text-white font-semibold uppercase text-sm bg-gradient-to-r from-purple-600 to-blue-500 hover:brightness-110 transition">Contact</a>
            </div>
        </nav>
    )
}