import styled from 'styled-components'

const Container = styled.header`
  background-color: #c4170c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`

const InputSearch = styled.input`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 15rem;
  margin-left: 1rem;
  background-color: rgba(0, 0, 0, 0.15);
  outline: none;
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`

export { Container, InputSearch }