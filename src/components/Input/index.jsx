import React from 'react'

import { InputContainer, Label, InputC } from './styles'

const Input = ({ nomeLabel, tipo = 'text', nome, obrigatorio = false }) => {
  return (
    <InputContainer>
      <Label htmlFor={nome}>{nomeLabel}</Label>
      <InputC type={tipo} name={nome} required={obrigatorio} />
    </InputContainer>
  )
}

export default Input
