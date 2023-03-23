import { Flex } from "../flex";
import { CardContainer } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <Flex direction="column" alignItems="flex-start">
        <span className="span_title_info_card">Animal</span>
        <span>Cachorro</span>
      </Flex>
      <Flex direction="column" alignItems="flex-start">
        <span className="span_title_info_card">Raça</span>
        <span>Husky</span>
      </Flex>
      <Flex direction="column" alignItems="flex-start">
        <span className="span_title_info_card">Cor do pelo</span>
        <span>Marrom e Cinza</span>
      </Flex>
    </CardContainer>
  );
}
