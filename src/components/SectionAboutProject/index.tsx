import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAbout } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type props = {
  sectionAbout: SectionAbout
}

const SectionAboutProject = ({ description, title, image }: SectionAbout) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
