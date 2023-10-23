'use client'
import React from 'react'

import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Home from './Home/page'

import { ContainerWrapper, Container, Main, Title } from './styles'

const Base = ({ children = <Home /> }) => {
  return (
    <ContainerWrapper>
      <Container>
        <Header />
        <Main>
          <Title>TECNOLOGIA</Title>
          {children}
        </Main>
        <Aside />
      </Container>
    </ContainerWrapper>
  )
}

export default Base
