import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Bag from "../../../../assets/svg/bag.svg";
import LinnkedInLogo from "../../../../assets/linkedIn_Logo.png";
import "./navbarComponent.style.css";
import Message from "../../../../assets/svg/message.svg";
import Home from "../../../../assets/svg/home.svg";
import Network from "../../../../assets/svg/network.svg";
import Notification from "../../../../assets/svg/notifications.svg";
import SearchBar from "./searchComponent/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../../../slices/auth.slice";
const pages = [
  { name: "Home", src: Home, href: "/home", current: true },
  { name: "My Networks", src: Network, href: "/my-network", current: false },
  { name: "Jobs", src: Bag, href: "/jobs", current: false },
  { name: "Messagging", src: Message, href: "/message", current: false },
  {
    name: "Notifications",
    src: Notification,
    href: "/notification",
    current: false,
  },
];

function NavbarComponent() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logged = useSelector((state) => state.auth.logged);
  console.log("logged value", logged);
  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/Login");
  };
  const handleDashboard=()=>{
    navigate("/dashboard");
  }
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#ffffff",
        height: "48px"
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          margin: "0",
          padding: "0",
          justifyContent: "center",
            gap: "40px",
        }}
      >
        <Toolbar disableGutters>
          
         <Box sx={{
          display:"flex",
          gap:"10px"
         }} >
         <img
            src={LinnkedInLogo}
            alt="inkedin Logo"
            className="linkedInLogo"
          />
          <SearchBar />
         </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.href}
                    underline="hover"
                    className={page.current ? "active" : "inActive"}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{  color: "black", display: "block" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "black",
                    alignItems:"center",
                    paddingBottom: "0px",
                    margin: 0,
                  }}
                >
                  <img key={page} src={page.src} alt="" className="home-logo"
                    />
                  <Link
                    href={page.href}
                    underline="hover"
                    className={page.current ? "active" : "inActive"}
                    sx={{
                      color: "black",
                      fontSize: "10px",
                      display:"flex",
                      justifyContent:"center",
                      
                    }}
                  >
                    {page.name}
                  </Link>
                </Box>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{
                  height:"32px",
                  width: "32px"
                }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ position:"absolute",
              top:"35px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
              {/* {settings.map((setting) => ( */}
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography textAlign="center">Dashboard</Typography>
              
              </MenuItem>
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              > 
              <Typography textAlign="center">Account</Typography>
              
               
              </MenuItem>
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography textAlign="center" onClick={handleDashboard}>Profile</Typography>
             
               
              </MenuItem>
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                 <Typography textAlign="center" onClick={handleLogOut}>
                Logout
              </Typography>
               
              </MenuItem>

              {/* ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarComponent;
