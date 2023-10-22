import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  background-color: #e60000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  grid-column: 1 / 5;
  grid-row: 1 / 2;
`

const Header = () => {
  return (
    <Container>
      <h1>News</h1>
      <input type="text" placeholder="Search" />
    </Container>
  )
}

export default Header
