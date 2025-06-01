import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Entre em contato</h1>
      <p className="text-xl text-center text-gray-600 mb-4">
        danilodeoliveira94@gmail.com
      </p>
      <p className="text-center text-gray-500 mb-8">
        Sinta-se à vontade para entrar em contato comigo!
      </p>

      <form className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
        </div>
        <Textarea
          placeholder="Sua mensagem"
          className="mb-4 h-32 resize-none"
        />
        <div className="flex justify-end mb-8">
          <Button type="submit">Enviar</Button>
        </div>
      </form>

      <div className="flex justify-center space-x-4">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={link.iconSrc}
              alt={link.alt}
              width={32}
              height={32}
              className="h-8 w-8 text-gray-600 hover:text-gray-900"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
