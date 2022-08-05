import { useState, useEffect } from "react";
import CheckBoxList from "../components/CheckBoxList";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const Tarefas = () => {
	let params = useParams();

	const [tasks, setTasks] = useState([
		{ id: 1, title: "Minora", completed: false },
		{ id: 2, title: "Ataide", completed: true },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
			.then((response) => response.json())
			.then((json) => {setTasks(json); setLoading(false); console.log(params.userId)});
	});
	return (
		<Container className="Tasks">
			<CssBaseline />
			<AppBar userId={params.userId} pagina="tarefas" />
			<Typography variant='h3'>Tarefas:</Typography>
			<Container className="card">
				{loading ? <Typography variant='h5'>Carregando...</Typography> : null}				
                <CheckBoxList tarefas={tasks} />
				
			</Container>

		</Container>
	);
};

export default Tarefas;