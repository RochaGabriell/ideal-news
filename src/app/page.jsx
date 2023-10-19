'use client'

import Base from './base/page'

const Home = ({ children = <Base /> }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Home
