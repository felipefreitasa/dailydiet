import { ChipStatusProps, Circle, Container, Title } from "./styles"

export function ChipStatus({ isInTheDiet }: ChipStatusProps) {
  return (
    <Container>
      <Circle isInTheDiet={isInTheDiet}/>

      <Title>
        {isInTheDiet ? 'dentro da dieta' : 'fora da dieta'}
      </Title>
    </Container>
  )
}