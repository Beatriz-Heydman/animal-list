//Libs
import { useState } from "react";
import { IoIosPaw } from "react-icons/io";

//Components
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Flex } from "./components/flex";
import { Input } from "./components/input";
import { PageContainer } from "./components/page-container";

//Constants
import { animals } from "./constants/animals";

function App() {
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  const [animalsFilter, setAnimalsFilter] = useState("");

  const testeDePull = 'teste'

  return (
    <PageContainer>
      <IoIosPaw className="icon_paw_page_container" />
      <Flex alignItems="flex-start" direction="column">
        <Input
          label="Digite a raça de algum animal"
          placeholder="Pesquisar..."
          onChange={(event) => {
            const inputValue = event.currentTarget.value;

            const searchAnimals = filteredAnimals.filter((animal) => {
              return animal.race
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            });

            if (inputValue === "") {
              setFilteredAnimals(animals);
            } else {
              setFilteredAnimals(searchAnimals);
            }
          }}
        />
      </Flex>
      <Flex alignItems="flex-start" direction="column" gap="0.5rem">
        <span className="span_filter_animals">Filtrar por:</span>
        <Flex alignItems="flex-start" gap="1rem">
          <Button
            isSelected={animalsFilter === "Dogs"}
            onClick={() => {
              const dogs = animals.filter((animal) => {
                return animal.type_animal === "Cachorro";
              });
              setFilteredAnimals(dogs);
              setAnimalsFilter("Dogs");
            }}
          >
            Cachorro
          </Button>
          <Button
            isSelected={animalsFilter === "Cats"}
            onClick={() => {
              const cats = animals.filter((animal) => {
                return animal.type_animal === "Gato";
              });
              setFilteredAnimals(cats);
              setAnimalsFilter("Cats");
            }}
          >
            Gato
          </Button>
          {animalsFilter !== "" && (
            <Button
              onClick={() => {
                setFilteredAnimals(animals);
                setAnimalsFilter("");
              }}
            >
              Limpar Filtro
            </Button>
          )}
        </Flex>
      </Flex>
      <Flex gap="1rem" style={{ maxWidth: "992px", margin: "auto" }}>
        {filteredAnimals.length === 0 && <span>Raça não encontrada</span>}
        {filteredAnimals.map((animal) => {
          return (
            <Card
              key={animal.race}
              hairColor={animal.hair_color}
              pictureUrl={animal.picture_url}
              race={animal.race}
              typeAnimal={animal.type_animal}
            />
          );
        })}
      </Flex>
    </PageContainer>
  );
}

export default App;
