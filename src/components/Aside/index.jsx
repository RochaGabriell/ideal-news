import React from 'react'
import TeachersList from '../TeachersList'

import { Container, Title } from './styles'

const Aside = () => {
  const teachers = [
    {
      subject: 'Programação Web II',
      name: 'Carlos Estevão Bastos Sousa',
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjXT-5Ij4QSMlYlDUsnFggWkK21fT5O-UYLfyiLZCas1QA=s75-c'
    },
    {
      subject: 'Redes de Computadores',
      name: 'Karl Hansimuller Alelaf Ferreira',
      image:
        'https://suap.ifpi.edu.br/media/fotos/75x100/44378.1OHjgqpHdGvf.jpg'
    },
    {
      subject: 'Introdução à ADM',
      name: 'Alan Silva',
      image: 'https://suap.ifpi.edu.br/static/comum/img/default.jpg'
    },
    {
      subject: 'Projeto Integrador II',
      name: 'Eutino Júnior Vieira Sirqueira',
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjV0QRVCPU1A6dnnpJtqQ5Zz9xit5v0K-T636Di1UJzrDw=s75-c'
    },
    {
      subject: 'Análise e Projeto de Sistemas',
      name: 'Felipe Gonçalves',
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjVLCpKEq_nvzQ8pUcTjKuw5X5Vbt5ZWqFMyaS-TZEkAJgQ=s75-c'
    },
    {
      subject: 'Engenharia de Software III',
      name: 'Edson Cavalcante',
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjVFa8OAYM-mQaiWPkxV9-2V1s2Hr-AujrLK58z3OB_UsiU=s75-c'
    }
  ]
  return (
    <Container>
      <Title> Corpo Docente </Title>
      <TeachersList teachers={teachers} />
    </Container>
  )
}

export default Aside
