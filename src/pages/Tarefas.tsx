import { useState, useEffect } from "react";
import CheckBoxList from "../components/CheckBoxList";

const Tarefas = (props: any) => {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Minora", completed: false },
		{ id: 2, title: "Ataide", completed: true },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
			.then((response) => response.json())
			.then((json) => {setTasks(json); setLoading(false)});
	});
	return (
		<div className="Tasks">
			<h1>Tarefas</h1>
			<div className="card">
				{loading ? <h2>Carregando...</h2> : null}
				
                <CheckBoxList tarefas={tasks} />
				
			</div>

		</div>
	);
};

export default Tarefas;