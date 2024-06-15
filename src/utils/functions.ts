// Função auxiliar para gerar uma sequência aleatória
export const generateRandomSequence = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Conjunto de caracteres que podem ser usados na sequência
  let result = ""; // Inicializa a variável que irá armazenar a sequência gerada
  for (let i = 0; i < length; i++) {
    // Loop para gerar a sequência
    result += characters.charAt(Math.floor(Math.random() * characters.length)); // Adiciona um caractere aleatório à sequência
  }
  return result.split(""); // Retorna a sequência como um array de caracteres
};
