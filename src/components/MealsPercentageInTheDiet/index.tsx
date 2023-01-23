import { TouchableOpacityProps } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Container, IconContainer, Paragraph, Percentage } from './styles'

import { ArrowUpRight } from "phosphor-react-native"

type Props = TouchableOpacityProps & {
  percentage: number;
}

export function MealsPercentageInTheDiet({ percentage, ...rest }: Props) {
  const { COLORS } = useTheme()

  const isGoodPercentage = percentage >= 70

  return (
    <Container 
      isGoodPercentage={isGoodPercentage}
      {...rest}
    >
      <IconContainer>
        <ArrowUpRight
          color={isGoodPercentage ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          size={24}
        />
      </IconContainer>

      <Percentage>
        {percentage}%
      </Percentage>

      <Paragraph>
        das refeições dentro da dieta
      </Paragraph>
    </Container>
  )
}