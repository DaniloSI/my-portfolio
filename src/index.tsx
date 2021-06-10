import { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.css';
import Portfolio from './Portfolio';
import './i18n';

render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
  document.getElementById('root')
);
