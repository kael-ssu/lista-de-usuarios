import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import VirtualizedList from "./GutterlessList";
import GutterlessList from "./GutterlessList";

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
			<h1>Chat</h1>
			<div className="card">
				{loading ? <h2>Carregando...</h2> : null}
				
				<GutterlessList users={users} />
				
			</div>

		</div>
	);
};

export default App;