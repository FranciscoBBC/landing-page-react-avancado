import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { Agenda } from 'types/api'

const SectionAgenda = ({ title, description }: Agenda) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }}></S.Text>
  </Container>
)

export default SectionAgenda
