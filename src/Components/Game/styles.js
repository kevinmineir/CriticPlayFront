import styled from "styled-components"

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10rem;
    height: fit-content;
    background-color: pink;
    border-radius: 10px;
    flex-shrink: 0;
`

export const gameImageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 12rem;
    background-color: yellow;
`

export const gameImage = styled.img`
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const gameInformationContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const gameName = styled.div`
    width: 95%;
    color: white;
    text-decoration: underline;
    font-size: 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const gameNotaContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`
export const gameNotaNumber = styled.div`
    color: white;
    background-color: rgb(56, 214, 56) ;
    padding: 0.25rem 0.3rem 0.25rem 0.3rem;
    border-radius: 5px;
    font-size: 0.85rem;
    font-weight: 600;
`


export const gameNotaText = styled.div`
    color: white ;
    display: flex;
    font-size: 0.8rem;
    text-align: center;
    margin-left: 0.5rem;
`