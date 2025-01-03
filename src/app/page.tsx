import Image from "next/image";

import hero1 from "../../public/col-md-6 (1).png";
import hero2 from "../../public/col-md-3.png";
import hero3 from "../../public/card-item.png";
import hero4 from "../../public/media bg-cover.png";
import Card from "@/components/card";
import banner from "../../public/col-md-6 (2).png";
import hero5 from "../../public/hero-cover-1.png";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/carousel 1.png')" }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-16 text-white">
          <p className="text-xs font-semibold py-4">Summer 2020</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            NEW COLLECTION
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed max-w-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="px-6 py-3 bg-[#2DC071] hover:bg-blue-700 rounded-lg text-sm sm:text-base md:text-lg font-medium transition transform hover:scale-105">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="text-center pt-12 mt-4">
        <h1 className="font-semibold text-lg">Editor,s Pick</h1>
        <p className="text-sm text-gray-500 pb-8">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6 pb-8">
        <Image
          className="w-full sm:w-[40%]"
          src={hero1}
          alt="carousel"
          width={100}
          height={100}
        />
        <Image
          className="w-full sm:w-[20%]"
          src={hero2}
          alt="carousel"
          width={100}
          height={100}
        />
        <div className="flex flex-wrap sm:flex-col justify-center gap-6">
          <Image
            className="w-full   sm:w-[250px]"
            src={hero3}
            alt="carousel"
            width={250}
            height={90}
          />
          <Image
            className=" w-full sm:w-[250px]"
            src={hero4}
            alt="carousel"
            width={250}
            height={90}
          />
        </div>
      </div>

      {/* Card Component */}
      <Card />

      {/* Vita Classic Section */}
      <div className="bg-green-500 flex flex-wrap items-center justify-around gap-8 px-6 py-12">
        <div className="text-white w-full sm:w-[45%] text-center sm:text-left">
          <p className="text-lg font-semibold py-4">SUMMER 2020</p>
          <h1 className="text-4xl md:text-6xl font-semibold py-4">
            Vita Classic Product
          </h1>
          <p className="text-sm py-4">
            We know how large objects will act. We know how objects will act. We
            know.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <p className="text-2xl font-bold">$16.18</p>
            <button className="bg-green-400 text-white text-sm font-semibold py-3 px-6 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
        <Image
          className="w-full sm:w-[45%]"
          src={banner}
          alt="banner"
          width={500}
          height={500}
        />
      </div>

      {/* Hero Cover Section */}
      <div className="flex flex-wrap items-center justify-around gap-8 px-6 py-12">
        <Image
          className="w-full sm:w-[45%]"
          src={hero5}
          alt="banner"
          width={500}
          height={500}
        />
        <div className="w-full sm:w-[45%] text-center sm:text-left">
          <p className="text-gray-400 text-xs font-semibold py-4">SUMMER 2020</p>
          <h1 className="text-2xl md:text-4xl font-bold py-4">
            Part of the Neural Universe
          </h1>
          <p className="text-gray-500 text-sm md:text-xl py-4">
            We know how large objects will act. We know how objects will act. We
            know.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <button className="bg-green-400 text-white py-3 px-6 rounded-md">
              READ MORE
            </button>
            <button className="border-2 border-green-500 text-green-500 py-3 px-6 rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
