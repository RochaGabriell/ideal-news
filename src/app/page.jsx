'use client'
import React, { useState, useEffect } from 'react'

import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Home from './Home/page'

import { ContainerWrapper, Container, Main, Title, NavLinks } from './styles'

const Base = ({ children = <Home /> }) => {
  const [pageTitle, setPageTitle] = useState('Tecnologia')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      if (pathname === '/representative') {
        setPageTitle('Representante')
      } else if (pathname === '/contact') {
        setPageTitle('Contato')
      }
    }
  }, [])
  const links = [
    {
      href: '/',
      name: 'Tecnologia'
    },
    {
      href: '/representative',
      name: 'Representante'
    },
    {
      href: '/contact',
      name: 'Contato'
    }
  ]
  return (
    <ContainerWrapper>
      <Container>
        <NavLinks>
          {links.map((value, index) => (
            <li key={index}>
              <a href={value.href}>{value.name}</a>
            </li>
          ))}
        </NavLinks>
        <Header />
        <Main>
          <Title>{pageTitle}</Title>
          {children}
        </Main>
        <Aside />
      </Container>
    </ContainerWrapper>
  )
}

export default Base
