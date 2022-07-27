import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

export default function GutterlessList(props: any) {
  return (
    <List sx={{ width: '100%', maxWidth: 360}}>
      {props.users.map((users: any) => (
        <ListItem
          key={users.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon color="primary" />
            </IconButton>
          }
        >
          <ListItemText primary={users.name} />
        </ListItem>
      ))}
    </List>
  );
}