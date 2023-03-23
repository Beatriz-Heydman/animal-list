import { Flex } from "./components/flex";
import { PageContainer } from "./components/page-container";
import { IoIosPaw } from "react-icons/io";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Card } from "./components/card";

function App() {
  console.log();
  return (
    <PageContainer>
      <IoIosPaw className="icon_paw_page_container" />
      <Flex alignItems="flex-start" direction="column">
        <Input
          label="Digite a raça de algum animal"
          placeholder="Pesquisar..."
        />
      </Flex>
      <Flex alignItems="flex-start" direction="column" gap="0.5rem">
        <span className="span_filter_animals">Filtrar por:</span>
        <Flex alignItems="flex-start" gap="1rem">
          <Button>Cachorro</Button>
          <Button>Gato</Button>
        </Flex>
      </Flex>
      <Flex>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </PageContainer>
  );
}

export default App;
