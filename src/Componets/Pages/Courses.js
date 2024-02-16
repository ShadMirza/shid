import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "../Navbar/Navbar";
import { AccountBalance } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import NotFound from "./NotFound";

const drawerWidth = 240;

export default function Courses() {
  const navigate = useNavigate(); 
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Navbar/>
    </AppBar>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalance/>
                </ListItemIcon>
                <ListItemText primary={"Courses"} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3,ml:30,mt:5 }}>
      <Toolbar />
      <Card sx={{ maxWidth: 345 }} onClick={()=>navigate('/CourseDetalis')}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://positiwise.com/blog/wp-content/uploads/2021/12/node-js-for-software-development-1200x600-1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Node Js
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur inventore eaque quae consequatur cupiditate adipisci
              vel, ad vero debitis eveniet alias corrupti tempore totam
              quibusdam! In laborum numquam accusantium rerum.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
       </Box>
      {/* <NotFound/> */}
      </Box>
      </>
  );
}
