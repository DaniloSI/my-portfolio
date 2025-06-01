export default function AboutMePage() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-[calc(100vh-4rem)] px-8 py-8 md:px-8 md:py-12">
      {/* Left Column */}
      <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
          Sobre mim
        </h1>
        <p className="text-gray-700 text-center md:text-left">
          Desenvolvedor frontend com mais de 7 anos de experiência, com atuação
          em projetos web de alta escala e foco na criação de soluções
          escaláveis, acessíveis e usáveis. Minha formação em sistemas de
          informação embasa meu foco em apps rápidos, seguros e de fácil uso.
          Especialista em React.js e Next.js, tenho experiência com testes
          automatizados, feature flags e observabilidade. Valorizo cultura de
          equipe, aprendizado contínuo e busco aprofundar em segurança,
          otimização e acessibilidade.
        </p>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
          Principais Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Linguagens</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Frameworks/Libs</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Next.js</li>
              <li>React Query</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Teste</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Jest</li>
              <li>React-Testing-Library</li>
              <li>Cypress</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ferramentas</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Git</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>Copilot</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Conceitos</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Clean Code</li>
              <li>Web Performance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Trabalho em equipe</li>
              <li>Cultura de feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
