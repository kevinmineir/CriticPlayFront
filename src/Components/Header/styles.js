import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    max-height: 6.5rem;
    min-height: 5rem;
    height: 15vh;
    background-color: rgb(20, 18, 18);
    border-bottom: 7px solid rgb(24, 23, 23);
    display: flex;
    align-items: center;
    flex-direction: row;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    padding: clamp(0.2rem, 1vw, 0.4rem);

    &:hover{
        cursor: pointer;
        background-color: #1a1a1a;
    }

    &:active{
         background-color: rgb(37, 32, 32);
    }
`
export const CustomSpan = styled.span`
    font-size: clamp(1rem, 2vw, 1.5rem);
    border-radius: 10px;
    font-weight: 600;
    user-select: none;
    width: 8vw;
    max-width: 4.7rem;
    min-width: 3.3rem;
    text-align: center;
    max-height: 2.1rem;
    min-height: 1.5rem;
    height: 4vh;
`
export const CustomSpan2 = styled.span`
    font-size: clamp(1rem, 2vw, 1.5rem);
    border-radius: clamp(5px,2vw,10px);
    font-weight: 600;
    user-select: none;
    color: #FF2D2D;
    padding-left: clamp(0rem,1vw,0.1rem)
`

export const SearchContainer = styled.form`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
`

export const SearchBar = styled.input`
    width: 45vw;
    max-width: 35rem;
    min-width: 6rem;
    max-height: 2.3rem;
    min-height: 1.8rem;
    height: 5vh;
    border-radius: 30px 0 0 30px;
    flex:1;
    border: none;
    padding: 0;
    padding-left: 0.5rem;
    font-size: clamp(0.7rem,2vw,0.8rem);
`

export const SeachButton = styled.button`
    max-height: 2.3rem;
    min-height: 1.8rem;
    height: 5vh;
    max-width: 3rem;
    min-width: 1.4rem;
    width: 2.5vw;
    border-radius: 0 30px 30px 0;
    background-color: #FF2D2D;
    justify-self:left;
    justify-content: center;
    align-items: center;
    display: flex;
    padding:0;
    transition: background-color 0.3s ease;
    border: none;

    &:hover{
        cursor: pointer;
        background-color: #fd4747;
    }
    &:active{
        background-color: #FF2D2D;
    }
`

export const SeachIcon = styled.img`
    max-width: 1.8rem;
    min-width: 1.1rem;
    width: 2.5vw;
    max-height: 1.6rem;
    min-height: 1rem;
    height: 2.5vh;
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const UserContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const UserIcon = styled.img`
    max-width: 2.5rem;
    border-radius: 50%;
    user-select:none;
`

export const UserName = styled.div`
    font-size: clamp(0.6rem,2vw,0.7rem);
    color: #FF2D2D;
`

export const MenuButton = styled.button`
    background-color: pink;
    color: #FF2D2D;
    font-size: 2rem;
    padding: 0;
    border: none;
    margin:0;
    border-radius: 50%;
    margin-left: 0.5rem;
    background-color: rgb(20, 18, 18);
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #1a1a1a;
        cursor:pointer;

    }
`

export const MenuImg = styled.img`
    width: 2.5rem;
    height: 2.2rem;
    padding: 0;
    margin: 0;
`