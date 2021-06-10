import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

const resources = {
  en: {
    translation: {
      'My Job': 'Software Engineer',
      'About Me': `Graduating in Information Systems at Ifes Campus Serra,
      expected to finish in August 2021, he was a volunteer student at LEDS
      (Extension Laboratory in Solution Development) and worked as a developer
      analyst at IndustriALL.`,
      'Skills': 'Skills',
      'About': 'About'
    }
  },
  pt: {
    translation: {
      'My Job': 'Engenheiro de Software',
      'About Me': `Graduando em Sistemas de Informação pelo Ifes Campus Serra,
      com término previsto para agosto de 2021, foi aluno voluntário do LEDS
      (Laboratório de Extensão em Desenvolvimento de Soluções) e trabalhou como
      analista desenvolvedor no IndustriALL.`,
      'Skills': 'Habilidades',
      'About': 'Sobre'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
