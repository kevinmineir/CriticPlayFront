import { useNavigate } from "react-router-dom"

export function HomePage() {

    const navigate = useNavigate()
    
    return (
        <>
            <div style={{cursor: "pointer"}} onClick={() => navigate('/Login')}>Login Pagina</div>
            <div style={{cursor: "pointer"}} onClick={() => navigate('/Cadastro')}>Cadastro pagina</div>
        </>
    )
}