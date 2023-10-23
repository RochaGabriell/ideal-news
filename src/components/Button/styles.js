import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #c4170c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0e6e1e;
  }
`

export { StyledButton }