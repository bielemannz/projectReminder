import heroImage from "../../assets/Imagens/Hero.png";
import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <img src={heroImage} alt="" />
    </Container>
  );
}