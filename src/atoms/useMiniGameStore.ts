import { atom, useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { generateRandomSequence } from "../utils/functions";

// Átomos para gerenciar o estado do jogo
const sequenceAtom = atom<string[]>(generateRandomSequence(6)); // Gera uma sequência aleatória de 6 caracteres
const userInputAtom = atom<string[]>(Array(6).fill("")); // Inicializa a entrada do usuário como um array de 6 strings vazias
const timerAtom = atom<number>(10); // Define o timer inicial como 10 segundos
const gameHistoryAtom = atom<
  {
    sequence: string[];
    userInput: string[];
    date: Date;
    success: boolean;
  }[]
>([]); // Inicializa o histórico do jogo como um array vazio

// Hook customizado para gerenciar a lógica do jogo
export function useMiniGame() {
  const [sequence, setSequence] = useAtom(sequenceAtom); // Obtém e define a sequência de caracteres
  const [userInput, setUserInput] = useAtom(userInputAtom); // Obtém e define a entrada do usuário
  const [timer, setTimer] = useAtom(timerAtom); // Obtém e define o valor do timer
  const [gameHistory, setGameHistory] = useAtom(gameHistoryAtom); // Obtém e define o histórico do jogo
  const [gameResult, setGameResult] = useState<boolean | null>(null); // Estado para armazenar o resultado do jogo

  // Função para salvar o histórico do jogo
  const saveGameHistory = useCallback(
    (success: boolean, finalUserInput: string[]) => {
      setGameHistory((prev) => [
        ...prev,
        {
          sequence,
          userInput: finalUserInput,
          date: new Date(),
          success,
        },
      ]);
    },
    [sequence, setGameHistory]
  );

  // Efeito para gerenciar o timer do jogo
  useEffect(() => {
    let timerInterval: number | undefined;
    if (gameResult === null) {
      // Inicia o intervalo do timer se o jogo ainda não tiver terminado
      timerInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            // Se o timer chegar a 1 ou menos, finaliza o jogo como perdido
            clearInterval(timerInterval);
            setGameResult(false);
            saveGameHistory(false, userInput);
            return 0;
          }
          return prev - 1;
        });
      }, 1000); // Decrementa o timer a cada segundo
    }
    return () => clearInterval(timerInterval); // Limpa o intervalo do timer ao desmontar o componente ou finalizar o jogo
  }, [gameResult, setTimer, saveGameHistory, userInput]);

  // Função para iniciar um novo jogo
  const startGame = useCallback(() => {
    setSequence(generateRandomSequence(6)); // Gera uma nova sequência aleatória
    setUserInput(Array(6).fill("")); // Reseta a entrada do usuário
    setTimer(10); // Reseta o timer para 10 segundos
    setGameResult(null); // Reseta o resultado do jogo
  }, [setSequence, setTimer, setUserInput, setGameResult]);

  // Função para lidar com a entrada do usuário
  const handleUserInput = useCallback(
    (value: string) => {
      if (gameResult !== null) return; // Se o jogo já tiver terminado, não faz nada

      const newInput = value.split("").map((char) => char.toUpperCase()); // Converte a entrada para maiúsculas
      const lastChar = newInput[newInput.length - 1]; // Obtém o último caractere inserido

      setUserInput(newInput); // Atualiza a entrada do usuário

      if (sequence[newInput.length - 1] !== lastChar) {
        // Se o último caractere estiver errado, finaliza o jogo como perdido
        const finalUserInput = [...newInput];
        setGameResult(false);
        saveGameHistory(false, finalUserInput);
        setTimer(0); // Zera o timer
      } else if (newInput.join("") === sequence.join("")) {
        // Se a sequência estiver correta, finaliza o jogo como ganho
        setGameResult(true);
        saveGameHistory(true, newInput);
        setTimer(0); // Zera o timer
      }
    },
    [sequence, gameResult, setUserInput, saveGameHistory, setTimer]
  );

  return {
    sequence,
    userInput,
    timer,
    gameHistory,
    gameResult,
    startGame,
    handleUserInput,
  };
}
