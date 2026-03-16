import * as S from './styles.js'
import {useNavigate} from "react-router-dom"
import Lupa from "../../Assets/Lupa.svg"
import DefaultProfile from "../../Assets/DefaultProfile.jpg"
import Menu from "../../Assets/Menu.svg"

export function Header() {
    const navigate = useNavigate()

    // adicionar onSubmit={() => handleSearch()} no Search container

    return(
        <>
            <S.Container>
                <S.MenuButton>
                    <S.MenuImg src={Menu}/>
                </S.MenuButton>
                <S.LogoContainer onClick={() => navigate('/')}>
                    <S.CustomSpan style={{backgroundColor: "#FF2D2D"}}>
                            Critic
                    </S.CustomSpan>
                    <S.CustomSpan2 style={{color: "#FF2D2D"}}>
                            Zone
                    </S.CustomSpan2>
                </S.LogoContainer>
                        
                <S.SearchContainer>
                    <S.SearchBar type="text" placeholder="Pesquise seu jogo no CriticZone"/>
                    <S.SeachButton action="submit"><S.SeachIcon src={Lupa}/></S.SeachButton>
                </S.SearchContainer>

                <S.ProfileContainer>
                    <S.UserContainer>
                        <S.UserIcon src={DefaultProfile}/>
                        <S.UserName>Place Holder</S.UserName>
                    </S.UserContainer>
                </S.ProfileContainer>
            </S.Container>
        </>
    )
}