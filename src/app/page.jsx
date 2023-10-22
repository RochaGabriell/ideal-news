'use client'

import Base from './base/page'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const Home = ({ children = <Base /> }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  )
}

export default Home
