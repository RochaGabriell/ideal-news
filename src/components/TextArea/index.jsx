import React from 'react'

import { TextAreaContainer, Label, Area } from './styles'

const TextArea = ({ nomeLabel, nome, linhas, colunas, obrigatorio }) => {
  return (
    <TextAreaContainer>
      <Label htmlFor={nome}>{nomeLabel}</Label>
      <Area name={nome} rows={linhas} cols={colunas} required={obrigatorio} />
    </TextAreaContainer>
  )
}

export default TextArea
