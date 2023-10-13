import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { ObtenerDatosUsuario } from '../api/SeeltApi';
import { useState, useEffect } from 'react';
// Importa el módulo de autenticación de Firebase
import { useAuth } from '../context/AuthContext'; // Asegúrate de que esta importación sea correcta

export default function AccountMenu() {
  const { user } = useAuth(); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Agregar la función de cierre de sesión desde el contexto de autenticación
  const { signout } = useAuth(); // Asegúrate de que esta variable sea correcta

  const handleLogout = () => {
    // Llama a la función de cierre de sesión al hacer clic en el botón "Logout"
    signout();
    handleClose(); // Cierra el menú después de cerrar la sesión
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [DatosUsuario, setDatosUsuario] = useState([]);

  useEffect(() => {
    ObtenerDatosUsuario(user.uid)
      .then(data => {
        setDatosUsuario(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);
  

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Typography sx={{ minWidth: 100, color: 'white' }}>{'@'+DatosUsuario.UserName}</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={DatosUsuario.UrlFoto} sx={{ width: 40, height: 40 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Canal
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configuracion
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
