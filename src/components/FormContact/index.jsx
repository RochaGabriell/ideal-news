import React from 'react'

import Input from '../Input'
import TextArea from '../TextArea'
import Button from '../Button'

import { FormContainer, Title } from './styles'

const FormContact = () => {
  return (
    <FormContainer>
      <Title>Entre em Contato</Title>
      <Input nomeLabel="Nome completo:" nome="nome" obrigatorio={true} />
      <Input nomeLabel="Email:" tipo="email" nome="email" obrigatorio={true} />
      <Input nomeLabel="Telefone:" tipo="tel" nome="telefone" />
      <TextArea
        nomeLabel="Mensagem:"
        nome="mensagem"
        linhas="4"
        colunas="50"
        obrigatorio={true}
      />
      <Button tipo="submit" />
    </FormContainer>
  )
}

export default FormContact
