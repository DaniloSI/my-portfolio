import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-8 py-8 md:px-24 md:py-8">
      {/* Image Container - For desktop, this will be on the right (order-2) */}
      <div className="md:w-1/2 flex justify-end mb-8 md:mb-0 md:order-2">
        <Image
          src="/me.webp" // Replace with your actual image path
          alt="Danilo de Oliveira"
          width={300} // Set to the largest size needed
          height={300} // Set to the largest size needed
          className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        />
      </div>
      {/* Text Container - For desktop, this will be on the left (order-1) */}
      <div className="md:w-1/2 md:order-1 md:pr-12">
        <h1 className="text-4xl font-bold mb-2 text-center md:text-left">
          Olá, sou Danilo de Oliveira
        </h1>
        <h2 className="text-2xl text-gray-600 mb-4">Desenvolvedor Frontend</h2>
        <p className="text-gray-700 mb-6 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button>Download do Currículo</Button>
        </div>
      </div>
    </div>
  );
}
