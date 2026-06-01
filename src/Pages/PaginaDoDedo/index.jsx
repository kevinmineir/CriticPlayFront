import * as S from './styles.js'
import { useNavigate } from 'react-router-dom'
import dedo from '../../Assets/dedo.jpg'

export function PaginaDoDedo(){

    const navigate = useNavigate()

    return(
        <>
            <S.Wrapper>
                <S.Container>
                    
                    <S.gameImageContainer>
                        <S.gameImage src={dedo}/>
                    </S.gameImageContainer>

                    <S.ErrorDesc>Esperava oq bocó</S.ErrorDesc>
                    <S.ReturnHome onClick={() => navigate("/Home")}>Voltar para a página inicial</S.ReturnHome>
                </S.Container>
            </S.Wrapper>
        </>
    )
}