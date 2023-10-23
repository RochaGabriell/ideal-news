import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import { Container, InputSearch } from './styles'

const Header = () => {
  return (
    <Container>
      <Hamburger />
      <h1>Ideal News</h1>
      <InputSearch type="text" placeholder="Search" />
    </Container>
  )
}

export default Header
