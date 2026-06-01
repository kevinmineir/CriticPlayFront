import * as S from "./styles.js"


export function Game(props) {
    return(
        <S.container>
            <S.gameImageContainer>
                <S.gameImage src={props.image}/>
            </S.gameImageContainer>

            <S.gameInformationContainer>
                <S.gameName>{props.gameName}</S.gameName>
                <S.gameNotaContainer>
                    <S.gameNotaNumber>{props.gameNota}</S.gameNotaNumber>
                    <S.gameNotaText>{props.gameNotaText}</S.gameNotaText>
                </S.gameNotaContainer>
            </S.gameInformationContainer>
        </S.container>
    )
}