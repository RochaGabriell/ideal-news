import React from 'react'

import {
  Card,
  Image,
  Title,
  Description,
  Author,
  PublishedAt,
  ReadMore
} from './styles'

const NewsCard = ({ article }) => {
  return (
    <Card>
      <Image
        src={article.urlToImage}
        onError={e => {
          e.target.src =
            'https://condo.news/wp-content/uploads/2022/10/condonews-Beneficios-da-tecnologia-na-seguranca-patrimonial.jpg'
        }}
        alt={article.title}
      />
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
      <Author>Author: {article.author}</Author>
      <PublishedAt>Published At: {article.publishedAt}</PublishedAt>
      <ReadMore>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </ReadMore>
    </Card>
  )
}

export default NewsCard
