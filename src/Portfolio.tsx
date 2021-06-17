import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import { IconButton, Tooltip } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

import MenuLanguage from './components/MenuLanguage';
import { ReactComponent as githubIcon } from './images/github.svg';
import { ReactComponent as linkedinIcon } from './images/linkedin.svg';
import { ReactComponent as mailIcon } from './images/mail.svg';
import photo from './images/Photo.png';
import {
  Body,
  Content,
  ContentSkills,
  FullName,
  IconContact,
  Job,
  Photo,
  PortifolioPage,
  Skill,
  SocialNetworks,
  Square,
  Title,
  TopButtons,
} from './styles';

interface ThemeColors {
  background: string;
  highlight: string;
  text: string;
  skill: string;
}

const dark: ThemeColors = {
  background: '#1E1E1E',
  highlight: '#1BB55C',
  text: '#FFFFFF90',
  skill: '#FFFFFF50'
};

const light: ThemeColors = {
  background: '#F4F4F4',
  highlight: '#2667ff',
  text: '#000',
  skill: '#BEBEBE'
};

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    setTheme(darkEnabled ? dark : light);
  }, [darkEnabled]);

  const skills = [
    'React', 'JavaScript', 'TypeScript', 'MongoDB', 'Cypress', 'Material-UI', 'styled-components', 'Docker', 'Git', '.NET', 'C#',
    'HTML', 'CSS', 'CI/CD', 'Azure DevOps', 'Travis-CI', 'Github Actions', 'TDD & BDD', 'Sonar Cloud', 'SQL Server', 'Python',
    'Dash'
  ];

  return (
    <ThemeProvider theme={theme}>
      <PortifolioPage>
        <TopButtons>
          <MenuLanguage />
          <Toggle
            className="toggle-dark"
            defaultChecked={darkEnabled}
            icons={{
              checked: <span className="toggle_icon">🌜</span>,
              unchecked: <span className="toggle_icon">🌞</span>,
            }}
            onChange={(e) => setDarkEnabled(e.target.checked)}
          />
        </TopButtons>
        <Photo>
          <img alt="danilo" src={photo} />
        </Photo>
        <FullName>
          <span>Danilo de Oliveira</span>
        </FullName>
        <Job>
          <span>{t('My Job')}</span>
        </Job>
        <SocialNetworks>
          <a href="mailto:danilodeoliveira94@gmail.com" rel="noreferrer" target="_blank">
            <Tooltip arrow title="E-mail">
              <IconButton>
                <IconContact component={mailIcon} viewBox="0 0 24 24" />
              </IconButton>
            </Tooltip>
          </a>
          <a href="https://www.linkedin.com/in/danilo-de-oliveira-28a024b2/" rel="noreferrer" target="_blank">
            <Tooltip arrow title="LinkedIn">
              <IconButton>
                <IconContact component={linkedinIcon} viewBox="0 0 24 24" />
              </IconButton>
            </Tooltip>
          </a>
          <a href="https://github.com/DaniloSI/" rel="noreferrer" target="_blank">
            <Tooltip arrow title="Github">
              <IconButton>
                <IconContact component={githubIcon} viewBox="0 0 24 24" />
              </IconButton>
            </Tooltip>
          </a>
        </SocialNetworks>
        <Content>
          <Square>
            <Title>{t('About')}</Title>
            <Body>{t('About Me')}</Body>
          </Square>
          <Square>
            <Title>{t('Skills')}</Title>
            <ContentSkills>
              {skills.map(s => <Skill key={s} label={s} variant="outlined" />)}
            </ContentSkills>
          </Square>
        </Content>
      </PortifolioPage>
    </ThemeProvider>
  );
};

export default Portfolio;
