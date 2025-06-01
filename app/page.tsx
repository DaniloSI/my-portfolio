import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-8 py-8 md:px-8 md:py-8">
      <div className="md:w-1/2 flex justify-end mb-8 md:mb-0 md:order-2">
        <Image
          src="/me.webp"
          alt="Danilo de Oliveira"
          width={300}
          height={300}
          className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        />
      </div>
      <div className="md:w-1/2 md:order-1 md:pr-12">
        <h1 className="text-4xl font-bold mb-2 md:text-left">
          Danilo de Oliveira
        </h1>
        <h2 className="text-2xl text-gray-600 mb-4">Desenvolvedor Frontend</h2>
        <p className="text-gray-700 mb-6 md:text-left">
          Como desenvolvedor frontend com mais de 7 anos de experiência, sou
          especialista em React.js e Next.js. Meu foco é a construção de
          soluções web escaláveis e acessíveis, garantindo que sejam rápidas e
          seguras.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button>Download CV</Button>
        </div>
      </div>
    </div>
  );
}
