import { Avatar, AvatarName, Container, Logo } from './styles'

import logoImg from '@assets/logo.png'

type Props = {
  userName: string
}

export function HeaderHome({ userName }: Props) {
  return (
    <Container>
      <Logo source={logoImg}/>

      <Avatar>
        <AvatarName>
          {userName}
        </AvatarName>
      </Avatar>
    </Container>
  )
}