import { HeaderHome } from "@components/HeaderHome"
import { MealsPercentageInTheDiet } from "@components/MealsPercentageInTheDiet"

import { Container } from "./styles"

export function Home(){
  return (
    <Container>
      <HeaderHome
        userName="FF"
      />

      <MealsPercentageInTheDiet 
        percentage={90}
      />
    </Container>
  )
}