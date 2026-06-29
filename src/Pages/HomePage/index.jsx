import { Header } from "../../Components/Header/index.jsx"
import { useNavigate } from "react-router-dom"
import { Game } from "../../Components/Game/index.jsx"
import macaco from "../../Assets/macaco.jpeg"
import * as S from "./styles.js"
import { Lista } from "../../Components/Lista/index.jsx"
// import { useAuth } from "../../hooks/useAuth.js"

export function HomePage() {

    // useAuth()

    const teste = [{
        nome: 'macaco' ,
        nota: '27',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco2' ,
        nota: '17',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco3' ,
        nota: '87',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco4' ,
        nota: '57',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco5' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco6' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco7' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco11' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco22' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco33' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco44' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco55' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco66' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },{
        nome: 'macaco77' ,
        nota: '67',
        imagem: macaco,
        notaTexto: "SIXX SEVEN"
    },]

    const navigate = useNavigate()

    return (
        <>
        <Header />

            <button style={{cursor: "pointer"}} onClick={() => navigate('/Login')}>Login Pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/Cadastro')}>Cadastro pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/NotFoundPage')}>Not Found pagina</button>
            <button style={{cursor: "pointer"}} onClick={() => navigate('/Toma')}>Toma Pagina</button>

            <S.containerMain>

          {/*      <S.gamesContainer>
                    <S.genreInfos>
                        <S.genreTitle>Macacos Gulosos</S.genreTitle>
                        <S.seeMore>Ver Mais</S.seeMore>
                    </S.genreInfos>
                    <S.gamesScroller>
                        <Game image={macaco}gameName="macaco"gameNota="67"gameNotaText="SIXX SEVENNN"/>
                    </S.gamesScroller>
                </S.gamesContainer>
           */}

                <S.gamesContainer>
                    <S.genreInfos>
                        <S.genreTitle>Macacos Safados</S.genreTitle>
                        <S.seeMore>Ver Mais</S.seeMore>
                    </S.genreInfos>
                    <S.gamesScroller>
                        <Game image={macaco}gameName="macaco"gameNota="67"gameNotaText="SIXX SEVENNN"/>
                        <Game image={macaco}gameName="macaco"gameNota="67"gameNotaText="SIXX SEVENNN"/>
                    </S.gamesScroller>
                </S.gamesContainer>


            </S.containerMain>

            <Lista objetos={teste}/>
        </>
    )
}