import {
  CharacterCard,
  CharacterDescription,
  DescriptionText,
  PlayMinigameButton,
  WrapperGameStartScreen,
} from "./styled";

function GameStartScreen() {
  return (
    <WrapperGameStartScreen>
      <PlayMinigameButton>Iniciar Mini-Game</PlayMinigameButton>
      <DescriptionText>Seus personagens</DescriptionText>
      <CharacterCard>
        <CharacterDescription>
          <div>
            <p> Personagem: </p>
            <span>Drake Ramone</span>
          </div>
          <div>
            <p> Tempo de jogo: </p>
            <span>15:20min</span>
          </div>
          <div>
            <p>Ultima partida:</p>
            <span>12/06/2024</span>
          </div>
        </CharacterDescription>
      </CharacterCard>{" "}
    </WrapperGameStartScreen>
  );
}

export default GameStartScreen;
