//Components
import { Flex } from "../flex";

//Styles
import { CardContainer } from "./styles";

//Types
import { CardProps } from "./types";

export function Card({ hairColor, pictureUrl, race, typeAnimal }: CardProps) {
  return (
    <CardContainer>
      <Flex direction="column" alignItems="flex-start" gap="1rem">
        <Flex direction="column" alignItems="flex-start">
          <span className="span_title_info_card">Animal</span>
          <span>{typeAnimal}</span>
        </Flex>
        <Flex direction="column" alignItems="flex-start">
          <span className="span_title_info_card">Raça</span>
          <span>{race}</span>
        </Flex>
        <Flex direction="column" alignItems="flex-start">
          <span className="span_title_info_card">Cor do pelo</span>
          <span>{hairColor}</span>
        </Flex>
      </Flex>
      <Flex>
        <img src={pictureUrl} alt="Imagem do animal" />
      </Flex>
    </CardContainer>
  );
}
