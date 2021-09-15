import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { Tech } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: Tech) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ icon, title }) => (
          <S.Icon key={icon.name}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={icon.name}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
