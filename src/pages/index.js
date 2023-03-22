import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './components/css/index.css';
import {
  Link
} from "react-router-dom";
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';


const Home = () => {
  return (
    <div>
      <div class="sfondo"></div>
      <div class="full-height" style={{backgroundColor: "transparent"}}>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: "transparent", marginBottom: "0px", position: "fixed", zIndex: "100", top: "0", width: "100%", minHeight: "50px"}}>
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
        <div style={{width: "100%", height: "100%", textAlign: "center", marginTop: "40%", position:"fixed"}}>
          <div class="button-container" style={{height: "40%"}}>
            <button class="button1" style={{backgroundColor: "transparent"}}><p class="h4">Domanda del giorno</p></button>
            <button class="button1" style={{backgroundColor: "transparent"}}><p class="h6">Domanda dell'ora</p></button>
          </div>
        </div>
        <ul class="nav justify-content-center" id="bottomNav" style={{backgroundColor: "#EAF2F8"}}>
          <li class="nav-item">
            <div>
              <button class="infinite">
                <AllInclusiveRoundedIcon style={{height: "100%", width: "100%"}}/>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

//first home
/*    

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  console.log(user)
} else {
  // No user is signed in.
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

      <Header />
        <Carousel />
        <div>
          <Box sx={{ flexGrow: 1 }} style={{paddingBottom: "20px", paddingTop: "20px", backgroundColor: "#242424"}}>
            <Grid container spacing={5}>
              <Grid item xs={3} style={{marginLeft: "12%"}}>
                <Card sx={{ maxWidth: 345 , borderRadius: "10px"}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="https://firebasestorage.googleapis.com/v0/b/test-9007d.appspot.com/o/pexels-limoo-15063519.jpg?alt=media&token=00012c38-8f07-425e-8cb2-f2a1bb9b6b10"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={3}>
                <Item>xs=4</Item>
              </Grid>
            </Grid>
          </Box>
        </div>
         
*/