import { Header } from "../../Components/Header/index.jsx"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/useAuth.js"

export function HomePage() {

    useAuth()
    const navigate = useNavigate()
    

    return (
        <>
        <Header />
            <button style={{cursor: "pointer"}} onClick={() => navigate('/Login')}>Login Pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/Cadastro')}>Cadastro pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/NotFoundPage')}>Not Found pagina</button>
        </>
    )
}