import './components/css/about.css';
import React from "react";
import Post from './components/post';
import Post2 from './components/post2';
import {
  Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';


export default function About() {
    return (
      <div class="full-height" style={{backgroundColor: "transparent"}}>
        <div class="sfondo"></div>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#82E0AA", marginBottom: "0px", position: "fixed", zIndex: "100", top: "0", width: "100%", minHeight: "50px"}}>
          <div class="container-fluid">
            <button class="navbarButton button2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/users">Users</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <Box style={{position: "fixed", right: "10%", top: "10px"}}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </div>
        </nav>
        <div style={{textAlign: "center", marginTop: "20%"}}>
          <div class="button-container" style={{paddingBottom: "50px"}} >
            <Post />
            <Post />
            <Post2 />
          </div>
        </div>
        <ul class="nav justify-content-center" id="bottomNav">
          <li class="nav-item">
            <button class="addIcon">
              <AddIcon />
            </button>
          </li>
        </ul>
      </div>
    );
  }