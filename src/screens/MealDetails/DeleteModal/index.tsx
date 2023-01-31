import Modal from "react-native-modal"

import { Button } from "@components/Button"

import { ButtonsContainer, Container, Title } from "./styles"

type Props = {
  isVisible: boolean;
  onDelete: () => void;
  onClose: () => void;
}

export function DeleteModal({ isVisible, onDelete, onClose }: Props){
  return (
    <Modal isVisible={isVisible} >
      <Container>
        <Title>
          Deseja realmente excluir o registro da refeição?
        </Title>

        <ButtonsContainer>
          <Button
            title='Cancelar'
            type= 'OUTLINED'
            onPress={onClose}
            style={{ width: '48%' }}
          />

          <Button
            title='Sim, excluir'
            onPress={onDelete}
            style={{ width: '48%' }}
          />
        </ButtonsContainer>
      </Container>
    </Modal>
  )
}