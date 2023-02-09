import { ViewProps } from "react-native"

import { Container, Subtitle, Title } from "./styles"

type Props = ViewProps &  {
  title: number;
  subtitle: string;
  backgroundColor: string;
}

export function StatisticCard({ title, subtitle, backgroundColor, ...rest }: Props){
  return(
    <Container 
      backgroundColor={backgroundColor}
      {...rest}
    >
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}