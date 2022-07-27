import { useState, useEffect } from "react";

const Posts = (props: any) => {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Minora", body: "" },
		{ id: 2, title: "Ataide", body: "" },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${props.id}/posts`)
			.then((response) => response.json())
			.then((json) => {setTasks(json); setLoading(false)});
	});
	return (
		<div className="Tasks">
			<h1>Posts</h1>
			<div className="card">
				{loading ? <h2>Carregando...</h2> : null}
				
			</div>

		</div>
	);
};

export default Posts;