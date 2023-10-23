import styled from 'styled-components'

const Container = styled.aside`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  padding: 1rem;
  text-align: center;
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
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000000;
`

export { Container, Title }
