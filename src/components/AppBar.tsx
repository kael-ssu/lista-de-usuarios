import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Home } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Grid } from '@mui/material';

export default function ButtonAppBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 6 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between" alignContent="center">
            <Grid item>

                <Link to="/" color="inherit">

                    <IconButton
                        size="large"
                        edge="start"
                        color="warning"
                        aria-label="home"
                        sx={{ mr: 2 }}
                    >
                        <Home />
                    </IconButton>
                </Link>
            </Grid>

            <Grid item>

                <Link to={ (props.pagina == "tarefas") ? `/posts/${props.userId}` : `/tarefas/${props.userId}`} color="inherit">

                    <IconButton
                        size="large"
                        edge="start"
                        color="warning"
                        aria-label="posts"
                        sx={{ mr: 2 }}
                    >
                        { (props.pagina == "tarefas") ? <CommentIcon /> : <AssignmentIcon />}
                    </IconButton>
                </Link>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}