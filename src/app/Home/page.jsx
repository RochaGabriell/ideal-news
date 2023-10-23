'use client'
import React from 'react'
import { FillingBottle } from 'react-cssfx-loading'

import useAxios from '@/hooks/useAxios'
import NewsCard from '@/components/NewCard'

import { ErroDiv } from './styles'

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
