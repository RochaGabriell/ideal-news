'use client'
import { FillingBottle } from 'react-cssfx-loading'
import NewsCard from '@/components/NewCard'
import useAxios from '@/hooks/useAxios'
import React from 'react'
import styled from 'styled-components'
import Header from '@/components/Header'

const Container = styled.div`
  background-color: #f2f2f2;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4rem 1fr;
`

const Main = styled.main`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`

const Base = () => {
  const { data, error, loading } = useAxios('everything?q=tecnologia')

  return (
    <>
      <Container>
        <Header />

        <Main>
          {error && <p>Error: {error}</p>}
          {loading && <FillingBottle color="#e60000" duration="4s" />}
          {data.articles?.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </Main>
      </Container>
    </>
  )
}

export default Base
