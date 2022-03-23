import react from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
import React from 'react';

type Props = {
  anchor: any;
  toggleDrawer: (anchor: any, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const DrawerMenu = ({anchor,toggleDrawer, ...props}: Props) => {
    return (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          {...props}
        >
    
          <Avatar
            alt="N"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <List>
              <ListItem button >
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
          </List>
        </Box>
    );
}

export default DrawerMenu;