import * as S from './styles.js'
import { useNavigate } from 'react-router-dom'

export function PageNotFound(){

    const navigate = useNavigate()

    return(
        <>
            <S.Wrapper>
                <S.Container>
                    <S.ErrorCode>404</S.ErrorCode>
                    <S.ErrorMessage>Not Found</S.ErrorMessage>
                    <S.ErrorDesc>A página que você está procurando não foi encontrada.</S.ErrorDesc>
                    <S.ReturnHome onClick={() => navigate("/")}>Voltar para a página inicial</S.ReturnHome>
                </S.Container>
            </S.Wrapper>
        </>
    )
}