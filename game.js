const startBtn = document.querySelector("#startBtn");
const nameInp = document.querySelector("#nameInp");
const gameBoard = document.querySelector("#gameBoard");

const historia = {
  passoAtual: "inicio",
  inicio: {
    titulo: "Capítulo  1",
    imagem: "images/inicio.jpg",
    historia:
      "Você estava andando na floresta perseguindo um ratinho, que te levou para este castelo. <br> O que você faz?",
    escolhas: [
      {
        escolha: "Entrar no castelo",
        destino: "batalha",
      },
      {
        escolha: "Ir tirar uma soneca no telhado",
        destino: "final",
      },
    ],
  },

  batalha: {
    titulo:"Capítulo 2",
    imagem: "images/cat-objects.webp",
    historia:
      "Assim que entra no castelo, dá de cara com um cão não muito amigável.<br> Você olha ao redor e as únicas coisas que vê e um pacote de catnipt em cima de uma mesinha, que tem um odor magnético, e um pequeno laser de bolso",
    escolhas: [
      {
        escolha: "Rolar no Catnip",
        destino: "armadura",
      },
      {
        escolha: "Usar o laser",
        destino: "luta",
      },
    ],
  },
  armadura: {
    titulo: "Capítulo 3",
    imagem: "images/catnip.jpg",
    historia:
      "Você rola na erva verdinha e ganha + 100 de armadura! <br> Os ataques do inimigo não surtem efeito e ele desiste da luta",
    escolhas: [
      {
        escolha: "Continuar explorando",
        destino: "pate",
      },
    ],
  },
  luta: {
    titulo: "Capítulo 3",
    imagem: "images/cao.jpg",
    historia:
      "Você aponta o laser para os olhos dele, o inimigo fica cego de um olho, que ganha tempo para voce fugir",
    escolhas: [
      {
        escolha: "Subir na cortina que da acesso ao segundo andar",
        destino: "pate",
      },
      {
        escolha: "Pular pela janela",
        destino: "final",
      },
    ],
  },
  pate: {
    titulo: "Capítulo 4",
    imagem: "images/pate.jpg",
    historia:
      "Andando pelo castelo acaba encontrando a cozinha, onde consegue ver pacotinhos do seu patê favorito de atum! <br> Parece que suas oracoes ao Grande Deus Gato Pançudo foram atendidas, pois esta faminto",
    escolhas: [
      {
        escolha: "Comer todos que puder",
        destino: "final2",
      },
      {
        escolha: "Comer 1 e guardar o restante na sua mochila para mais tarde",
        destino: "final3",
      },
    ],
  },
  final: {
    titulo: "Fim",
    imagem: "images/sadcat.jpg",
    historia: "Parece que sua aventura chegou ao fim...",
    destinoInicial: 'inicio',
    buttonText: "Voltar ao início "
  },
  final2: {
    titulo: "Capítulo 5",
    historia: "Voce comeu demais, acabou dormindo na cozinha e foi encontrado por um cão guarda",
    imagem: "images/preso.jpg",
    destinoInicial: 'inicio',
    buttonText: "Voltar ao início "
  },

  final3: {
    titulo: "Capítulo 5",
    historia: "Parabéns, você conseguiu vencer os obstáculos e ainda levar sache pra casa!",
    imagem: "images/final.jpg",
    destinoInicial: 'inicio',
    buttonText: "Voltar ao início "
  },
};

//criando a nova pag do jogo ao clicar no botao

startBtn.addEventListener("click", mostrarCena);

function mostrarCena() {
  let btnText = "Proximo"
  if (historia[historia.passoAtual].buttonText) {
    btnText = historia[historia.passoAtual].buttonText
  }
  // if ( "data-destino" === "batalha2") {
  //   historia.passoAtual = batalha();
  // }
  gameBoard.innerHTML = `
    <header>
      <h1> ${historia[historia.passoAtual].titulo} </h1>
        
    </header>

    <div>
        <img class="logo" src="./${historia[historia.passoAtual].imagem}" />
        <p>${historia[historia.passoAtual].historia}</p>
        ${getInput()}
        <button id="btnEnviar" class="shadow p-3 mb-5 bg-body-tertiary rounded">${btnText}</button>        
    </div>       
    `
   
    ;
  //ao clicar no botao "proximo", seguir p/ a opcao selecionada
  const btnEnviar = document.querySelector("#btnEnviar");
  btnEnviar.addEventListener("click", () => {
    getInputValue();
  });
}

// function batalha() {
//   gameBoard.innerHTML = `
//     <body>
//       <h1>njcdsus</h1>
//     </body>
//   `
// }

// verifica qual caixa de opcao foi marcada
function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      historia.passoAtual = inputs[i].getAttribute("data-destino");
      mostrarCena();
      return; //pra sair da cena
    }
  }
  historia.passoAtual = historia[historia.passoAtual].destinoInicial
  mostrarCena();
}

//funcao que percorre os elementos da historia e pega
//as escolhas disponiveis
function getInput() {
  var input = "";
  if(!historia[historia.passoAtual].escolhas) {
    return ""
  }
  for (var i = 0; i < historia[historia.passoAtual].escolhas.length; i++) {
    //insere as opcoes disponiveis
    //o data-destino captura o elemento destino, dentro das escolhas
    input += `
    <div>
        <input data-destino="${
          historia[historia.passoAtual].escolhas[i].destino
        }" id="radio${i}" type="radio" name="escolhas" />
        <label for="radio${i}">${
      historia[historia.passoAtual].escolhas[i].escolha
    }</label>
    </div>`;
  }
  return input;
}
