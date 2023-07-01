import React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const DrawerContainer = styled('div')({
  width: 250,
});

const Sidebar = ({ open, onClose }) => {
  const handleDrawerClose = () => {
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
      <DrawerContainer>
        <List>
          <ListItem button component={Link} to="/homepage">
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Cotação" />
          </ListItem>
          <ListItem button component={Link} to="/productpage">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/mycalendar">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Fornecedores" />
          </ListItem>
        </List>
      </DrawerContainer>
    </Drawer>
  );
};

export default Sidebar;
