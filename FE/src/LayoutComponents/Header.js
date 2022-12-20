import * as React from 'react';
import{Link as ReactLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContext } from '../UserContext';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#222831',
      },
      Secondary: {
        // This is green.A700 as hex.
        main: '#222831',
      },
    },
  });

const pages = ['Home', 'About', 'Buy', 'Sell'];
const settings = ['Profile', 'login'];
const pagespaths=['/','/about','/buy','/sell']
const settingpaths=['/profile','/login']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { loggedIn, avatar ,logoutUser } = React.useContext(UserContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static"  color="Secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

         <div className="col-lg-2 col-md-1 my-auto">
        <ReactLink to="/">
        <img src="images/footer-logo.png" className="navigation-logo my-auto" alt="logo"/>
        </ReactLink>
         </div>  

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs:'none', md: 'flex' } }}>
            {pages.map((page,i) => (
              <Button
              
                component={ReactLink}
                to={pagespaths[i]}
                key={page}
                sx={{ mx: 1, my: 1, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="O" src= {avatar} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,i) => (
                <MenuItem key={setting} component={ReactLink}
                to={settingpaths[i]}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
               {
                loggedIn ? 
                  <MenuItem onClick={logoutUser}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem> :
                  <MenuItem
                  to={'/register'}
                  component={ReactLink}
                  onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
              }
              
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
