import { TouchableOpacityProps } from "react-native";
import { Container, LeftContainer, Divider, Hour, MealName, Point } from "./styles"

type Props = TouchableOpacityProps & {
  hour: string;
  mealName: string;
  isInTheDiet: boolean;
}

export function Meal({ hour, mealName, isInTheDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <LeftContainer>
        <Hour>
          {hour}
        </Hour>

        <Divider/>

        <MealName>
          {mealName}
        </MealName>
      </LeftContainer>

      <Point
        isInTheDiet={isInTheDiet}
      />
    </Container>
  )
}