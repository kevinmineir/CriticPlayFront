import { Routes, Route } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/index.jsx";
import { CadastroForm } from "./Pages/CadastroForm/index.jsx";
import { LoginForm } from "./Pages/LoginForm/index.jsx";
import { PageNotFound } from "./Pages/PageNotFound/index.jsx";
import { PaginaDoDedo } from "./Pages/PaginaDoDedo/index.jsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />  
      <Route path="/Home" element={<HomePage/>} />  
      <Route path="/Login" element={ <LoginForm/>} />
      <Route path="/Cadastro" element={ <CadastroForm/>} />
      <Route path="/Toma" element={<PaginaDoDedo/>} />
      <Route path="*" element={ <PageNotFound/> } />
    </Routes>
  );
}

