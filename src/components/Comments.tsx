import {useState, useEffect} from 'react';
import { Divider, Avatar, Grid, Paper, Button } from "@mui/material";
import { Container, List, Typography } from "@mui/material";

const imgLink = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Comments(props: any) {
  const [comments, setComments] = useState([{postId: 0, id: 0, name: "", email: "", body: ""}]);
  const [openComments, setOpenComments] = useState(true);

  const handleOpenComments = () => {
    setOpenComments(!openComments);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.post}/comments`)
    .then(response => response.json())
    .then(json => setComments(json))
  })

  return (
    <Container sx={{ padding: 5 }}>
      <Button>
        <Typography variant="h6" onClick={handleOpenComments}>
          Comments ({comments.length}) 
        </Typography>
      </Button>
      <List hidden={openComments}>
        {comments.map((comment) => (
          <>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
                <p style={{ textAlign: "left" }}>
                  {comment.body}
                </p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </>
        ))}
      </List>
    </Container>
  );
}

