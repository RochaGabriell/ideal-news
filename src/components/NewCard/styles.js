import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 30rem;
  max-height: 35rem;
  transition: all 0.7s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  height: auto;
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: auto;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const Author = styled.p`
  font-size: 0.8rem;
  color: #555;
`

const PublishedAt = styled.p`
  font-size: 0.8rem;
  color: #555;
`

const ReadMore = styled.div`
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #0074cc;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export { Card, Image, Title, Description, Author, PublishedAt, ReadMore }
