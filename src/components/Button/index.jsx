import React from 'react'

import { StyledButton } from './styles'

const Button = ({ tipo }) => {
  return <StyledButton type={tipo}>Enviar</StyledButton>
}

export default Button
