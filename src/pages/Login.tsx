import FingerprintIcon from "@mui/icons-material/Fingerprint";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (event: any) => {
        setName(event.target.value);
    }
  

    return (

        <Container>

            <TextField 
                id="outlined-basic" 
                label="apelido ou email de usuário" 
                variant="outlined"
                value={name}
                onChange={handleChangeName}
            />

            <TextField 
                label="Senha" 
                type="password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <Button variant="contained" endIcon={<HomeIcon />} >
                <Link to={"/"}>
                    <Typography>Voltar</Typography>
                </Link>
            </Button>


            <Button 
                variant='contained'
                disabled={!(!!name && !!password)}
                endIcon={<FingerprintIcon />}
            >

                <Link to={`/`}>
                    <Typography>Entrar no chat</Typography>
                </Link>

            </Button>

        </Container>

    );
};

export default Login;