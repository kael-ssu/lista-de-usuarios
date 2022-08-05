import { useState, useEffect } from "react";
import "../App.css";
import GutterlessList from "../components/GutterlessList";
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const AppLoginLogoutButton = (props: any) => {
	if (!props.login()) {
	  return (
			<Grid padding={5} container direction="row" justifyContent="space-between">
				<Grid item>
					<Button variant="contained" href="/login">Login</Button>

				</Grid>

				<Grid item>
					<Button variant="contained" href="/cadastro">Cadastro</Button>
					
				</Grid>
			</Grid>

	  );
	} else {
		return (
		  <Button
			variant="contained"
			onClick={() => props.onLogout()}
		  >
			Logout
		  </Button>
		);
	}
};

const App = () => {
	const params = useParams();
	const [users, setUsers] = useState([
		{ id: 0, name: "" }
	]);
  	const [loading, setLoading] = useState(true);
	const [sessionId, setSessionId] = useState(params.hash ?? "");
	const isUserLogged = () => (sessionId ? true : false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
		<Container className="App" >
			<AppLoginLogoutButton login={isUserLogged} onLogout={() => setSessionId("")} />

			<Container>
				<Typography variant='h3'>Usuários:</Typography>
				<Container className="card">
					{loading ? <Typography variant='h5'>Carregando...</Typography> : null}
					<GutterlessList users={users} />
				</Container>
			</Container>
		</Container>
	);
};

export default App;