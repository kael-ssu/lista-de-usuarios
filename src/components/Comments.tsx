import {useState, useEffect} from 'react';
// import { Divider, Avatar, Grid, Paper } from "@mui/material";
import { Container, List, Typography } from "@mui/material";

const imgLink = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Comments(props: any) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.post}/comments`)
    .then(response => response.json())
    .then(json => setComments(json))
  })

  return (
    <Container sx={{ padding: 14 }}>
      <Typography variant="h1">Comments {props.post} {comments.length} </Typography>
      <List>
        {comments.map((comment) => <Typography color={'white'}>{comment.name}</Typography>)}
      </List>
    </Container>
  );
}

