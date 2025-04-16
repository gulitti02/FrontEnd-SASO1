// Seleciona todas as células do tabuleiro (cada quadrado do jogo da velha)
const cellElements = document.querySelectorAll("[data-cell]");

// Seleciona o tabuleiro completo
const board = document.querySelector("[data-board]");

// Seleciona o elemento onde vai aparecer a mensagem "X venceu", "O venceu" ou "Empate"
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");

// Seleciona o contêiner da mensagem de vitória/empate
const winningMessage = document.querySelector("[data-winning-message]");

// Seleciona o botão de reiniciar o jogo
const restartButton = document.querySelector("[data-restart-button]");

// Variável que vai guardar se é a vez do círculo ou não (se for false, é a vez do X)
let isCircleTurn;

// Lista com todas as combinações de vitória possíveis no jogo
const winningCombinations = [
  [0, 1, 2], // linha de cima
  [3, 4, 5], // linha do meio
  [6, 7, 8], // linha de baixo
  [0, 3, 6], // coluna da esquerda
  [1, 4, 7], // coluna do meio
  [2, 5, 8], // coluna da direita
  [0, 4, 8], // diagonal principal
  [2, 4, 6], // diagonal secundária
];

// Função que inicia ou reinicia o jogo
const startGame = () => {
  isCircleTurn = false; // o jogo sempre começa com o X

  // Limpa todas as células do tabuleiro
  for (const cell of cellElements) {
    cell.classList.remove("circle"); // remove círculo da célula
    cell.classList.remove("x"); // remove X da célula
    cell.removeEventListener("click", handleClick); // remove eventos antigos
    cell.addEventListener("click", handleClick, { once: true }); // adiciona novo evento (só pode clicar uma vez)
  }

  setBoardHoverClass(); // define a aparência do tabuleiro de acordo com o jogador da vez
  winningMessage.classList.remove("show-winning-message"); // esconde a mensagem de vitória ou empate
};

// Função que exibe a mensagem de fim de jogo
const endGame = (isDraw) => {
  if (isDraw) {
    winningMessageTextElement.innerText = "Empate!";
  } else {
    winningMessageTextElement.innerText = isCircleTurn
      ? "O Venceu!"
      : "X Venceu!";
  }

  // Mostra a mensagem de vitória ou empate na tela
  winningMessage.classList.add("show-winning-message");
};

// Função que verifica se o jogador atual venceu
const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
};

// Função que verifica se todas as células estão preenchidas (e ninguém ganhou)
const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

// Função que coloca X ou Círculo na célula clicada
const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

// Função que muda a aparência do tabuleiro para indicar de quem é a vez
const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

// Função que troca o jogador da vez (de X para O ou de O para X)
const swapTurns = () => {
  isCircleTurn = !isCircleTurn; // inverte o turno atual
  setBoardHoverClass(); // atualiza o estilo do tabuleiro
};

// Função principal que é executada quando uma célula é clicada
const handleClick = (e) => {
  const cell = e.target; // pega a célula clicada
  const classToAdd = isCircleTurn ? "circle" : "x"; // decide se vai colocar círculo ou X

  placeMark(cell, classToAdd); // coloca a marca na célula

  const isWin = checkForWin(classToAdd); // verifica se houve vitória
  const isDraw = checkForDraw(); // verifica se houve empate

  if (isWin) {
    endGame(false); // se alguém venceu
  } else if (isDraw) {
    endGame(true); // se empatou
  } else {
    swapTurns(); // continua o jogo e troca de jogador
  }
};

// Inicia o jogo pela primeira vez
startGame();

// Quando o botão de reiniciar for clicado, começa um novo jogo
restartButton.addEventListener("click", startGame);
