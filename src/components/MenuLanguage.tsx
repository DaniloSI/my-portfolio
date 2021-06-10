import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Avatar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import brasil from '../images/brasil.png';
import unitedStates from '../images/united-states.png';

const useStyles = makeStyles(() =>
  createStyles({
    small: {
      width: 32,
      height: 32,
    },
  }),
);

const MenuLanguage: React.FC = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = (l: string) => {
    setLang(l);
    handleClose();
  };

  return (
    <div style={{ marginRight: 12 }}>
      <IconButton onClick={handleClick} size="small">
        <Avatar className={classes.small} src={lang === 'pt-BR' ? brasil : unitedStates} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="simple-menu"
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={() => handleChangeLang('pt-BR')}>
          <ListItemIcon><Avatar className={classes.small} src={brasil} /></ListItemIcon>
          <ListItemText>
            Português
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleChangeLang('en-US')}>
          <ListItemIcon><Avatar className={classes.small} src={unitedStates} /></ListItemIcon>
          <ListItemText>
            English
          </ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuLanguage;
