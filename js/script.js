// Selecionando todos os elementos de tecla (elementos com a classe 'key')
const keys = document.querySelectorAll('.key');

// Selecionando o checkbox que controla a visibilidade das teclas
const checkbox = document.querySelector('.checkbox__keys');

// Selecionando o botão de alternância para a visibilidade das teclas
const switcher = document.querySelector('.switcher');

// Selecionando a seção que contém as teclas do piano
const keysSection = document.querySelector('.piano__keys');

// Função para tocar uma nota quando chamada
const playNote = (note) => {
    // Cria um objeto de áudio e toca o arquivo correspondente à nota
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

// Função para tratar o evento de pressionar uma tecla (mousedown)
const handleMouseDown = (key) => {
    // Toca a nota correspondente à tecla
    playNote(key.getAttribute('data-note'));

    // Se a tecla for preta, adiciona a classe para indicar que foi pressionada
    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

    // Se a tecla for branca, altera o fundo para indicar que foi pressionada
    key.style.background = '#ddd';
}

// Função para tratar o evento de soltar a tecla (mouseup)
const handleMouseUp = (key) => {
    // Se a tecla for preta, remove a classe de tecla pressionada
    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    // Se a tecla for branca, volta o fundo da tecla para a cor original
    key.style.background = 'white';
}

// Adiciona os eventos de mouse (mousedown e mouseup) para cada tecla
keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key));  // Quando pressionado
    key.addEventListener('mouseup', () => handleMouseUp(key));  // Quando liberado
});

// Controlando a visibilidade das teclas com o checkbox
checkbox.addEventListener('change', ({ target }) => {
    // Se o checkbox estiver marcado
    if (target.checked) {
        // Adiciona a classe para ativar a animação do switcher e exibe as teclas
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    // Se o checkbox não estiver marcado
    // Remove a animação do switcher e desativa a visibilidade das teclas
    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

// Mapeamento das teclas do teclado físico para as teclas do piano (keydown)
const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),  // Quando a tecla "Tab" é pressionada, ativa a primeira tecla do piano
    "1": () => handleMouseDown(keys[1]),  // Quando "1" é pressionado, ativa a segunda tecla do piano
    "q": () => handleMouseDown(keys[2]),  // Quando "q" é pressionado, ativa a terceira tecla do piano
    "2": () => handleMouseDown(keys[3]),  // Quando "2" é pressionado, ativa a quarta tecla do piano
    "w": () => handleMouseDown(keys[4]),  // Quando "w" é pressionado, ativa a quinta tecla do piano
    "e": () => handleMouseDown(keys[5]),  // Quando "e" é pressionado, ativa a sexta tecla do piano
    "4": () => handleMouseDown(keys[6]),  // Quando "4" é pressionado, ativa a sétima tecla do piano
    "r": () => handleMouseDown(keys[7]),  // Quando "r" é pressionado, ativa a oitava tecla do piano
    "5": () => handleMouseDown(keys[8]),  // Quando "5" é pressionado, ativa a nona tecla do piano
    "t": () => handleMouseDown(keys[9]),  // Quando "t" é pressionado, ativa a décima tecla do piano
    "6": () => handleMouseDown(keys[10]), // Quando "6" é pressionado, ativa a décima primeira tecla do piano
    "y": () => handleMouseDown(keys[11]), // Quando "y" é pressionado, ativa a décima segunda tecla do piano
    "u": () => handleMouseDown(keys[12]), // Quando "u" é pressionado, ativa a décima terceira tecla do piano
    "8": () => handleMouseDown(keys[13]), // Quando "8" é pressionado, ativa a décima quarta tecla do piano
    "i": () => handleMouseDown(keys[14]), // Quando "i" é pressionado, ativa a décima quinta tecla do piano
    "9": () => handleMouseDown(keys[15]), // Quando "9" é pressionado, ativa a décima sexta tecla do piano
    "o": () => handleMouseDown(keys[16]), // Quando "o" é pressionado, ativa a décima sétima tecla do piano
    "p": () => handleMouseDown(keys[17]), // Quando "p" é pressionado, ativa a décima oitava tecla do piano
    "-": () => handleMouseDown(keys[18]), // Quando "-" é pressionado, ativa a décima nona tecla do piano
    "[": () => handleMouseDown(keys[19]), // Quando "[" é pressionado, ativa a vigésima tecla do piano
    "=": () => handleMouseDown(keys[20]), // Quando "=" é pressionado, ativa a vigésima primeira tecla do piano
    "]": () => handleMouseDown(keys[21]), // Quando "]" é pressionado, ativa a vigésima segunda tecla do piano
    "Backspace": () => handleMouseDown(keys[22]), // Quando "Backspace" é pressionado, ativa a vigésima terceira tecla do piano
    "\\": () => handleMouseDown(keys[23]), // Quando "\" é pressionado, ativa a vigésima quarta tecla do piano
}

// Mapeamento das teclas do teclado físico para o evento de soltar a tecla (keyup)
const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "Backspace": () => handleMouseUp(keys[22]),
    "\\": () => handleMouseUp(keys[23]),
}

// Adiciona um ouvinte de evento de 'keydown' para detectar quando uma tecla do teclado físico é pressionada
document.addEventListener('keydown', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do navegador
    keyDownMapper[event.key](); // Chama a função correspondente à tecla pressionada
});

// Adiciona um ouvinte de evento de 'keyup' para detectar quando uma tecla do teclado físico é solta
document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key](); // Chama a função correspondente à tecla solta
});