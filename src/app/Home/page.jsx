'use client'
import React from 'react'
import { FillingBottle } from 'react-cssfx-loading'
import styled from 'styled-components'

import useAxios from '@/hooks/useAxios'
import NewsCard from '@/components/NewCard'

const ErroDiv = styled.div`
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e60000;
  font-size: 2.5rem;
  font-weight: bold;
  width: 100%;
`

const Home = () => {
  const { data, error, loading } = useAxios('everything?q=tecnologia')

  return (
    <>
      {error && <ErroDiv>Error: {error.message}</ErroDiv>}
      {loading && <FillingBottle color="#e60000" duration="4s" />}
      {data?.articles?.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </>
  )
}

export default Home
