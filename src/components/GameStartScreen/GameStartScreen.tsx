import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useMiniGame } from "../../atoms/useMiniGameStore";
import {
  CharacterCard,
  CharacterDescription,
  DescriptionText,
  ModalLogoHeader,
  PlayMinigameButton,
  RankingContainer,
  RankingTitleMiniGame,
  RankingWrapper,
  WrapperGameStartScreen,
} from "./styled";
import logo from "../../assets/logo.svg";
import { Fragment } from "react/jsx-runtime";
import { FaArrowTurnDown } from "react-icons/fa6";

function GameStartScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    sequence,
    userInput,
    timer,
    gameResult,
    startGame,
    handleUserInput,
    gameHistory,
  } = useMiniGame();

  return (
    <WrapperGameStartScreen>
      <div>
        <PlayMinigameButton
          onClick={() => {
            startGame();
            onOpen();
          }}
        >
          Iniciar Mini-Game
        </PlayMinigameButton>
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
      </div>

      <div>
        <Box>
          <RankingWrapper>
            <RankingTitleMiniGame>
              Seu histórico em Mini Game
              <i>
                <FaArrowTurnDown />
              </i>
            </RankingTitleMiniGame>

            {gameHistory.slice(-5).map((game, index) => (
              <RankingContainer key={index}>
                <Text>{game.date.toLocaleString()}</Text>
                <Text>Resultado: {game.success ? "Sucesso" : "Falha"}</Text>
                <Text>Sequência: {game.sequence.join(" ")}</Text>
              </RankingContainer>
            ))}
          </RankingWrapper>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
              maxWidth="800px"
              height="400px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg="rgba(0, 0, 0, 0.9)"
            >
              <ModalHeader
                color="#ffc046"
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
                width="100%"
              >
                <ModalLogoHeader>
                  <img src={logo} alt="" />
                </ModalLogoHeader>
                MINI-GAME
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {gameResult === null && (
                  <Fragment>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text p={2} mt={2} mb={4}>
                        Sequência:
                      </Text>
                      <Text color="#ffc046" fontWeight="bold" mt={2} mb={4}>
                        {sequence.join(" ")}
                      </Text>
                    </Box>

                    <HStack>
                      <PinInput
                        type="alphanumeric"
                        value={userInput.join("")}
                        onChange={handleUserInput}
                      >
                        <PinInputField color="#ffc046" />
                        <PinInputField color="#ffc046" />
                        <PinInputField color="#ffc046" />
                        <PinInputField color="#ffc046" />
                        <PinInputField color="#ffc046" />
                        <PinInputField color="#ffc046" />
                      </PinInput>
                    </HStack>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text p={2} mt={2} mb={4}>
                        Tempo restante:
                      </Text>
                      <Text color="#ffc046" fontWeight="bold" mt={2} mb={4}>
                        {timer}s
                      </Text>
                    </Box>
                  </Fragment>
                )}

                {gameResult === false && (
                  <Text>Você perdeu! Tente novamente.</Text>
                )}
                {gameResult === true && (
                  <Text>Parabéns! Você acertou a sequência.</Text>
                )}
              </ModalBody>
              <ModalFooter gap="16px">
                {gameResult !== null && (
                  <Fragment>
                    <Button
                      bg="transparent"
                      color="#ffc046"
                      border="1px solid #ffc046"
                      _hover={{ color: "#fff" }}
                      width="250px"
                      variant="outline"
                      onClick={onClose}
                    >
                      Finalizar
                    </Button>
                    <Button
                      width="250px"
                      bg="#ffc046"
                      color="#fff"
                      _hover={{ bg: "#ffb100" }}
                      onClick={() => {
                        startGame();
                      }}
                    >
                      Jogar novamente
                    </Button>
                  </Fragment>
                )}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </div>
    </WrapperGameStartScreen>
  );
}

export default GameStartScreen;
