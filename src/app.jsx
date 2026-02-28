import { Routes, Route } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/index.jsx";
import { CadastroForm } from "./Pages/CadastroForm/index.jsx";
import { LoginForm } from "./Pages/LoginForm/index.jsx";
import { PageNotFound } from "./Pages/PageNotFound/index.jsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />  
      <Route path="/Login" element={ <LoginForm/>} />
      <Route path="/Cadastro" element={ <CadastroForm/>} />
      <Route path="*" element={ <PageNotFound/> } />
    </Routes>
  );
}

