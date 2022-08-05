import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Tarefas from './pages/Tarefas'
import Posts from './pages/Posts'
import Alert from '@mui/material/Alert'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tarefas/:userId" element={<Tarefas />} />
        <Route path="posts/:userId" element={<Posts />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route
          path="*"
          element={
            <Alert variant="filled" severity="warning">
              Não há nada aqui...
            </Alert>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
