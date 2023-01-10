import { TouchableOpacityProps } from "react-native"

import { Circle, Container, SelectTypeStyleProps, Title } from "./styles"

type Props = TouchableOpacityProps & {
  type: SelectTypeStyleProps;
  isSelected: boolean;
  label: string;
}

export function SelectButton({ type, isSelected, label, ...rest }: Props){
  return (
    <Container
      isSelected={isSelected}
      type={type}
      {...rest}
    >
      <Circle type={type} />

      <Title>
        {label}
      </Title>
    </Container>
  )
}