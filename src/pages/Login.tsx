import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, Hidden, IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = React.useState([])
  const [fail, setFail] = React.useState(false)
  const navigate = useNavigate();

  fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then((json) => {
    setUsers(json);
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");

    if (users.map((user) => user.email).includes(email)) {
      navigate("/");
    } else {
      console.log('falhou!')
      setFail(true);
    }

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <IconButton aria-label="delete">
            <KeyboardReturnIcon />
          </IconButton>
        </Link>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembre-se de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          {fail ? 
          <Alert variant="filled" severity="error">
            Falha na autenticação!
          </Alert> : null}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/cadastro" variant="body2">
                {"Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
