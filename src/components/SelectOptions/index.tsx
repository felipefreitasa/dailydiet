import { useState } from "react"

import { OptionProps, options } from "./options";

import { SelectButton } from "@components/SelectButton";

import { Container } from "./styles"

export function SelectOptions(){
  const [selectedOption, setSelectedOption] = useState<OptionProps | null>()

  return(
    <Container>
      {options.map((option) => (
        <SelectButton
          key={option.id}
          type={option.type}
          label={option.label}
          isSelected={option.id === selectedOption?.id}
          onPress={() => setSelectedOption(option)}
        />
      ))}
    </Container>
  )
}