'use client'
import React from 'react'
import Base from '../page'

import {
  RepresentativeContainer,
  RepresentativeImage,
  RepresentativeName,
  RepresentativeDescription,
  RepresentativeAchievements,
  TextAchievements
} from './styles'

const Representative = () => {
  const representativeData = {
    name: 'Sabrina Castelo',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZou9fd8V3RmKvV_mZLT-VS0YXy8gFKswXw&usqp=CAU',
    description: 'Representante Estudantil da Faculdade IFPI',
    achievements: [
      'Desenvolvedora do Twitter',
      'Participação ativa no Clube de Ciências',
      'Premiada na Competição de Programação',
      'Primeira E-Girl do IFPI'
    ]
  }

  return (
    <Base>
      <RepresentativeContainer>
        <RepresentativeImage
          src={representativeData.photo}
          alt={`Foto de ${representativeData.name}`}
        />
        <RepresentativeName>{representativeData.name}</RepresentativeName>
        <RepresentativeDescription>
          {representativeData.description}
        </RepresentativeDescription>
        <TextAchievements>Feitos e Prêmios na Faculdade:</TextAchievements>
        <RepresentativeAchievements>
          {representativeData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </RepresentativeAchievements>
      </RepresentativeContainer>
    </Base>
  )
}

export default Representative
