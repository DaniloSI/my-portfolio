# Meu Portfólio

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência profissional.

## 🚀 Sobre o Projeto

Este projeto é um site de portfólio construído com Next.js e Tailwind CSS, com o objetivo de ser uma plataforma moderna e responsiva para exibir meu trabalho e informações de contato.

## ✨ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para produção
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para design rápido
- [ESLint](https://eslint.org/) - Ferramenta de linting para JavaScript e TypeScript
- [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente em disco

## 🏁 Começando

Siga estas instruções para obter uma cópia local do projeto em funcionamento.

### Pré-requisitos

Certifique-se de ter o Node.js e o pnpm instalados em sua máquina.

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [pnpm](https://pnpm.io/installation)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DaniloSI/my-portfolio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd my-portfolio
   ```
3. Instale as dependências:
   ```bash
   pnpm install
   ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## 🛠️ Estrutura do Projeto

A estrutura de pastas principal do projeto é a seguinte:

```
my-portfolio/
├── app/                      # Contém as rotas e páginas da aplicação (App Router)
│   ├── about-me/             # Página "Sobre Mim"
│   ├── contact/              # Página de "Contato"
│   ├── layout.tsx            # Layout principal da aplicação
│   └── page.tsx              # Página inicial
├── components/               # Componentes React reutilizáveis
│   ├── ui/                   # Componentes de UI (ex: Button, Input)
│   └── navigation-menu.tsx   # Componente do menu de navegação
├── lib/                      # Funções utilitárias e constantes
├── public/                   # Arquivos estáticos (imagens, ícones)
├── next.config.ts            # Configurações do Next.js
├── postcss.config.mjs        # Configurações do PostCSS (para Tailwind CSS)
├── tailwind.config.ts        # Configurações do Tailwind CSS (implicitamente, já que não está listado, mas `postcss.config.mjs` sugere seu uso)
├── tsconfig.json             # Configurações do TypeScript
└── package.json              # Metadados do projeto e dependências
```

## 🤝 Contribuindo

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

Se você tiver uma sugestão para melhorar este projeto, por favor, faça um fork do repositório e crie uma pull request. Você também pode simplesmente abrir uma issue com a tag "enhancement".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça um Fork do Projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)):
   ```bash
   git commit -m 'feat: add amazing new feature'
   # Example of other commit types:
   # git commit -m 'fix: fix bug in X feature'
   # git commit -m 'docs: update Y feature documentation'
   # git commit -m 'style: format code (spacing, semicolons, etc)'
   # git commit -m 'refactor: refactor code without changing functionality'
   # git commit -m 'test: add or fix tests'
   # git commit -m 'chore: update build tasks, dependencies, etc.'
   ```
4. Faça um Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra uma Pull Request

## 📄 Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações (se aplicável - adicione um arquivo LICENSE se desejar).

## 📬 Contato

Danilo S.I. - danilodeoliveira94@gmail.com

Link do Projeto: [https://github.com/DaniloSI/my-portfolio](https://github.com/DaniloSI/my-portfolio)
