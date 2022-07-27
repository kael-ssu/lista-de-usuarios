import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import GutterlessList from "../components/GutterlessList";
import Typography from '@mui/material/Typography';

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
		<div className="App">
			<Typography variant='h3'>Usuários:</Typography>
			<div className="card">
				{loading ? <Typography variant='h5'>Carregando...</Typography> : null}
				
				<GutterlessList users={users} />
				
			</div>

		</div>
	);
};

export default App;