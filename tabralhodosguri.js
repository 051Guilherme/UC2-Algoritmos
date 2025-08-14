const readline = require('readline');98
//Guilherme, Pedro, Arthur, Leonardo
const tamanho = 10;
let mapa = Array.from({ length: tamanho }, () => Array(tamanho).fill('.'));


const obstaculos = [{ x: 2, y: 2 }, { x: 3, y: 4 }, { x: 6, y: 1 }];
const moonligth = [{ x: 5, y: 5 }];
const estus = [{ x: 8, y: 3 }];
const inimigos = [{ x: 7, y: 7, hp: 15, ataque: 4 }];
//const inimigo = [{ x: 3, y: 9, hp: 5, ataque: 2 }];1'

let posX = 0;
let posY = 0;
mapa[posY][posX] = 'P';

let jogador = {
  hp: 10,
  ataque: 1,

  inventario: ["Moonligth Greatsword"]
};

function posicionarElementos() {

  for (let y = 0; y < tamanho; y++) {
    for (let x = 0; x < tamanho; x++) {
      if (!(x === posX && y === posY)) {
        mapa[y][x] = '.';
      }
    }
  }

  for (let o of obstaculos) mapa[o.y][o.x] = 'A';
  for (let e of moonligth) mapa[e.y][e.x] = 'I';
  for (let v of estus) mapa[v.y][v.x] = 'E';

  
  for (let i of inimigos) {
    if (i.hp > 0) mapa[i.y][i.x] = 'M';
  }
/*for (let s of inimigo){
    if (s.hp > 0) matriz[s.y][s.x] = 'N';
}*/
  mapa[posY][posX] = 'P';
}


function desenharMatriz() {
  console.clear();
  for (let linha of mapa) {
    console.log(linha.join(' '));
  }
  console.log(`\nHP: ${jogador.hp} | Ataque: ${jogador.ataque} | Inventário: ${jogador.inventario.join(', ') || 'vazio'}`);
  console.log('Use W (cima), A (esquerda), S (baixo), D (direita). 9 para sair.');
}

function mover(direcao) {
  let novoX = posX;
  let novoY = posY;

  if (direcao === 'w' && posY > 0) novoY--;
  else if (direcao === 's' && posY < tamanho - 1) novoY++;
  else if (direcao === 'a' && posX > 0) novoX--;
  else if (direcao === 'd' && posX < tamanho - 1) novoX++;

  const destino = mapa[novoY][novoX];

  if (destino === 'A') return; 
  if (destino === 'I') {
    console.log("Buff de inteligencia")
    jogador.ataque += 2;
    jogador.inventario.push('INT');
    
  }
  if (destino === 'E') {
    jogador.hp += 5;
    jogador.inventario.push('Estus');
    console.log('Você pegou um frasco de estus!');
  }
  if (destino === 'M') {
    let inimigo = inimigos.find(i => i.x === novoX && i.y === novoY);
    //let inimigoN = inimigo.find(s => s.x === novoX && s.y === novoY);
    if (inimigo) {
      batalha(inimigo);
      if (inimigo.hp > 0) return; 
      mapa[novoY][novoX] = '.'; 
    /*}else if (destino === 'N') {
    let inimigo = inimigoN.find(s => s.x === novoX && s.y === novoY);
    if (inimigo) {
      batalha(inimigo);s
      if (inimigoN.hp > 0) return; 
      matriz[novoY][novoX] = '.'; 
    }*/
}
  }
  

  mapa[posY][posX] = '.'; 
  posX = novoX;
  posY = novoY;
  mapa[posY][posX] = 'P';
  posicionarElementos(); 
  desenharMatriz();
}

function batalha(inimigo) {
  console.log('\n Malenia');
  while (inimigo.hp > 0 && jogador.hp > 0) {
    inimigo.hp -= jogador.ataque;
    console.log(`Bate nela karai HP da Malenia: ${inimigo.hp}`);

    if (inimigo.hp <= 0) {
      jogador.inventario.push("100K DE ALMAS");
      return;
    }

    jogador.hp -= inimigo.ataque;
    console.log(`Nao tenta desviar teu HP: ${jogador.hp}`);

    if (jogador.hp <= 0) {
      console.log(' É, A Malenia é foda ');
      process.exit();
    }
  }
}



readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
posicionarElementos();
desenharMatriz();

process.stdin.on('keypress', (str, key) => {
  const tecla = key.name.toLowerCase();
  if (['w', 'a', 's', 'd'].includes(tecla)) {
    mover(tecla);
  }
  if (key.name === '9') {
    console.log('Fraco sem ideal');
    process.exit();
  }
});