import styled from 'styled-components'

const RepresentativeContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #c4170c;
  margin: 10px;
`

const RepresentativeImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`

const RepresentativeName = styled.h2`
  font-size: 2.2rem;
  margin: 0;
`

const RepresentativeDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`

const RepresentativeAchievements = styled.ul`
  list-style: disc;
  padding-left: 20px;
`

const TextAchievements = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`

export {
  RepresentativeContainer,
  RepresentativeImage,
  RepresentativeName,
  RepresentativeDescription,
  RepresentativeAchievements,
  TextAchievements
}
