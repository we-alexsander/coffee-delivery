import ItemSection from "./components/ItemSection";
import InfoSection from "./components/InfoSection";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <InfoSection></InfoSection>
      <ItemSection></ItemSection>
    </Container>
  );
}

export default Home;
