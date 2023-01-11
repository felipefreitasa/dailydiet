import { SelectTypeStyleProps } from "@components/SelectButton/styles";

export type OptionProps = {
  type: SelectTypeStyleProps;
  label: string;
  id: number;
}

export const options: OptionProps[] = [
  {
    id: 1,
    label: 'Sim',
    type: 'AFFIRMATIVE'
  },
  {
    id: 2,
    label: 'Não',
    type: 'NEGATIVE'
  },
]