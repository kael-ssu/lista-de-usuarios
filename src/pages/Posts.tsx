import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import AppBar  from "../components/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Posts = () => {
	let params = useParams();

	const [posts, setPosts] = useState([
		{ userId: 1, id: 1, title: "Minora", body: "" },
		{ userId: 1, id: 2, title: "Ataide", body: "" },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`)
			.then((response) => response.json())
			.then((json) => {setPosts(json); setLoading(false)});
	});
	return (
		<Container className="Tasks">
			<AppBar userId={params.userId} pagina="posts" />
			<Typography variant='h3'>Posts:</Typography>
			<div className="card">
				{loading ? <Typography variant='h5'>Carregando...</Typography> : null}
				<PostList posts={posts} />
			</div>

		</Container>
	);
};

export default Posts;