import { useState } from "react"
import { TouchableOpacityProps } from "react-native"

import { Plus, PencilSimpleLine, Trash, IconContext } from "phosphor-react-native"

import { useTheme } from "styled-components/native"
import { ButtonTypeStyleProps, Container, Title } from "./styles"

type ButtonIconProps = 'ADD' | 'EDIT' | 'REMOVE'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ButtonIconProps
}

export function Button({ title, type = 'CONTAINED', icon, ...rest }: Props){
  const { COLORS } = useTheme()

  const [isActive, setIsActive] = useState(false)

  function handleButtonIcon(icon: ButtonIconProps){
    const iconOptions = {
      ADD: <Plus/>,
      EDIT: <PencilSimpleLine/>,
      REMOVE: <Trash/>
    }

    return (
      <IconContext.Provider
        value={{
          size: 18,
          color: type === 'OUTLINED' ? COLORS.GRAY_2 : COLORS.WHITE,
          style: { marginRight: 12 }
        }}
      >
        {iconOptions[icon]}
      </IconContext.Provider>
    )
  }

  return (
    <Container
      type={type}
      activeOpacity={1}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      isActive={isActive}
      {...rest}
    >
      {icon && handleButtonIcon(icon)}

      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}