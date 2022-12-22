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
        main: '#00ADB5',
      },
      Secondary: {
        // This is green.A700 as hex.
        main: '#222831',
      },
    },
  });
  let row2Styling = {
    "border-top":"1px solid lightgray",
    "border-bottom":"1px solid lightgray"
}

let btnStyle = {
  "width":"15%"
}
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




    
    // <ThemeProvider theme={theme}>
    // <AppBar position="static"  color="Secondary">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>

    //      <div className="col-lg-2 col-md-1 my-auto">
    //     <ReactLink to="/">
    //     <img src="images/footer-logo.png" className="navigation-logo my-auto" alt="logo"/>
    //     </ReactLink>
    //      </div>  

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>

    //       <Box sx={{ flexGrow: 1, display: { xs:'none', md: 'flex' } }}>
    //         {pages.map((page,i) => (
    //           <Button
              
    //             component={ReactLink}
    //             to={pagespaths[i]}
    //             key={page}
    //             sx={{ mx: 1, my: 1, color: 'white', display: 'block' }}
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //           <Avatar alt="O" src= {avatar} />
    //           </IconButton>
    //         </Tooltip>

    //         <Menu
    //           sx={{ mt: '45px' }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting,i) => (
    //             <MenuItem key={setting} component={ReactLink}
    //             to={settingpaths[i]}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //            {
    //             loggedIn ? 
    //               <MenuItem onClick={logoutUser}>
    //                 <Typography textAlign="center">Logout</Typography>
    //               </MenuItem> :
    //               <MenuItem
    //               to={'/register'}
    //               component={ReactLink}
    //               onClick={handleCloseUserMenu}
    //               >
    //                 <Typography textAlign="center">Register</Typography>
    //               </MenuItem>
    //           }
              
    //         </Menu>
    //       </Box>

    //     </Toolbar>
    //   </Container>
    // </AppBar>
    // </ThemeProvider>




<div>

<section className="navigation">

    {/* Row 1 */}
    <div className="row col-lg-10 col-md-10 mx-auto padding-y-1 justify-content-between">

        {/* Logo */}
        <div className="col-lg-2 col-md-2 my-auto">
            <a href="/">
                <img src="/images/logo.png" className="navigation-logo my-auto" alt="logo"/>
            </a>
        </div>

        {/* Search */}
        {/* <div className="col-lg-7 col-md-7 row">
            <div className="col-lg-10 col-md-10 m-auto row">
                <form className="row col-lg-12 col-md-12">
                    <input className="navigation-search my-auto col-lg-11 col-md-11" type="search" placeholder="I am looking for..." />
                    <button type="submit" className="btn btn-primary col-lg-1 col-md-1 navigation-search-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </div> */}

        {/* CTA and Login */}
        <div className="col-lg-2 col-md-3 row">

            <div className="col-lg my-auto text-end">
            </div>

            <div className="col-lg my-auto text-end">
                <a href="/cart">
                    <i class="fa-solid fa-cart-shopping font-20"></i>
                </a>
            </div>
            <div className="col-lg my-auto text-end">
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
            </div>
        </div>

    </div>


    {/* Row 2 */}
    {/* <div className="col-lg-10 col-md-10 mx-auto py-2 row justify-content-between" style={row2Styling}>
        <div className="col-lg col-md">
            <a href="/product-listing" className="nav-link">Living Room</a>
        </div>
        <div className="col-lg col-md">
            <a href="/" className="nav-link">Bedroom</a>
        </div>
        <div className="col-lg col-md">
            <a href="/" className="nav-link">Dining Room</a>
        </div>
        <div className="col-lg col-md"> 
            <a href="/" className="nav-link">Office</a>
        </div>
        <div className="col-lg col-md"> 
            <a href="/" className="nav-link">Outdoor</a>
        </div>
        <div className="col-lg col-md"> 
            <a href="/" className="nav-link">Bathroom</a>
        </div>
    </div> */}

</section>

{/* Mobile Navigation */}

<section class="col-12 mobile-navigation padding-y-1 m-auto">

    <div class="row col-11 m-auto">

        <div class="col my-auto">
            <i class="fa-solid fa-bars mobile-menu-icon" data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
            <div class="offcanvas offcanvas-start" id="demo">
                <div class="offcanvas-header text-end">
                </div>
                <div class="offcanvas-body">
                    
                    <ReactLink to={'/buy'}  class="nav-link mobile-nav-link font-25" style={btnStyle}>Buy Furniture</ReactLink>
                <ReactLink to={'/sell'} class="nav-link mobile-nav-link font-25" style={btnStyle}>Sell Furniture</ReactLink>
                </div>
            </div>
        </div>

        <div class="mobile-navigation-image col-5">
            <img src="./images/logo.png" class="navigation-logo" alt=""/>
        </div>

        <div class="col">
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
        </div>

    </div>
</section>

</div>









































  );
}
export default ResponsiveAppBar;
