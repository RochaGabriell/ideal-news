import styled from 'styled-components'

const ContainerWrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const Container = styled.div`
  background-color: #f2f2f2;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2rem 4rem 1fr;
`

const Main = styled.main`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 4rem 1fr;
  gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`

const Title = styled.h1`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  text-align: center;
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 1rem;

  li {
    list-style: none;
    padding: 5px;

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      font-size: 0.9rem;
    }

    a:hover {
      color: #ff0000;
    }
  }
`

export { ContainerWrapper, Container, Main, Title, NavLinks }
