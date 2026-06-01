import { Header } from "../../Components/Header/index.jsx"
import { useNavigate } from "react-router-dom"
import { Game } from "../../Components/Game/index.jsx"
import macaco from "../../Assets/macaco.jpeg"
import * as S from "./styles.js"
// import { useAuth } from "../../hooks/useAuth.js"

export function HomePage() {

    // useAuth()

    const navigate = useNavigate()

    return (
        <>
        <Header />

            <button style={{cursor: "pointer"}} onClick={() => navigate('/Login')}>Login Pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/Cadastro')}>Cadastro pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/NotFoundPage')}>Not Found pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/Toma')}>Toma Pagina</button>

            <S.containerMain>

                <S.gamesContainer>
                    <S.genreInfos>
                        <S.genreTitle>Macacos Gulosos</S.genreTitle>
                        <S.seeMore>Ver Mais</S.seeMore>
                    </S.genreInfos>
                    <S.gamesScroller>
                        <Game image={macaco}gameName="macaco"gameNota="67"gameNotaText="SIXX SEVENNN"/>
                    </S.gamesScroller>
                </S.gamesContainer>

                <S.gamesContainer>
                    <S.genreInfos>
                        <S.genreTitle>Macacos Safados</S.genreTitle>
                        <S.seeMore>Ver Mais</S.seeMore>
                    </S.genreInfos>
                    <S.gamesScroller>
                        <Game image={macaco}gameName="macaco"gameNota="67"gameNotaText="SIXX SEVENNN"/>
                    </S.gamesScroller>
                </S.gamesContainer>


            </S.containerMain>
        </>
    )
}