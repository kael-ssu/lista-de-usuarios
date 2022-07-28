import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

export default function GutterlessList(props: any) {
  return (
    <List sx={{ width: '100%', maxWidth: 360}}>
      {props.users.map((user: any) => (
        <ListItem
          key={user.id}
          disableGutters
          secondaryAction={
            <Link to={`/posts/${user.id}`}>
              <IconButton aria-label="comment">
                <CommentIcon color="primary" />
              </IconButton>
            </Link>
          }
        >
          <Link to={`/tarefas/${user.id}`}>
            <ListItemText primary={user.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}