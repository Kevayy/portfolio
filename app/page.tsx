import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <Navbar />
      <div className="pt-32 pb-12 flex flex-col items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}
