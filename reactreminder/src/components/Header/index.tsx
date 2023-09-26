import { useState } from "react";
import { Container } from "./styles";
import reminderLogo from "../../assets/Imagens/Logo.jpg";
import { Button } from "../Button";
import { NewStickyModal } from "../../components/NewStickyModal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handOpenModal() {
    setIsModalOpen(true);
  }

  function handCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <Container>
      <img src={reminderLogo} alt="Logo React Reminder" />

      <Button title="Adicionar Lembrete" onClick={handOpenModal} />
      <NewStickyModal isOpen={isModalOpen} onRequestClose={handCloseModal} />
    </Container>
  );
}
