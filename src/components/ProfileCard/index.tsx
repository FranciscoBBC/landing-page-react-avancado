import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type socialLinks = {
  title: string
  url: string
}

type Props = {
  name: string
  role: string
  image: string
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <img src={getImageUrl(image)} loading="lazy" alt={name} />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({ title, url }) => (
        <S.Link key={url}>
          <a href={url} title={title}>
            {icons[title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
