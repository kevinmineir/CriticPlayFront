import styled from 'styled-components'

export const containerMain = styled.div`
    display: flex;
    flex-direction: column;
`

export const gamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const genreInfos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const seeMore = styled.button`
    padding: 0;
    background-color: transparent;
    font-size: 0.6rem;
    text-decoration: underline;
    font-weight: 600;
    margin-left: 0.7rem;
    border: 0;
    color: white;
    transition: color 0.3s ease;

    &:hover {
        color: rgb(146, 146, 146);
    }
`

export const genreTitle = styled.div`
    margin-left: 1rem;
    padding-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    font-weight: 700;
`

export const gamesScroller = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 1rem;
    margin-left: 1rem;
    width: 100%;
    flex-shrink: 0;
`