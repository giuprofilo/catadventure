const startBtn = document.querySelector("#startBtn");
const nameInp = document.querySelector("#nameInp");
const gameBoard = document.querySelector("#gameBoard");

const historia = {
  passoAtual: "inicio",
  inicio: {
    titulo: "Capitulo 1",
    imagem: "images/cat1.jpg",
    historia:
      "Ola,. Voce estava andando na floresta perseguindo um ratinho, que te levou para este castelo.<br>O que voce faz?",
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
    titulo:"",
    imagem: "",
    historia:
      "Assim que entra no castelo, da de cara com um cao nao muito amigavel.<br> Voce olha ao redor e as unicas coisas que ve e um pacote de catnipt em cima de uma mesinha, que tem um odor magnetico, e um pequeno laser de bolso",
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
    titulo: "",
    imagem: "",
    historia:
      "Voce rola na erva verdinha e ganha + 100 de armadura! <br> Os ataques do inimigo nao surtem efeito e ele desiste da luta",
    escolhas: [
      {
        escolha: "Continuar explorando",
        destino: "pate",
      },
    ],
  },
  luta: {
    titulo: "",
    imagem: "",
    historia:
      "Voce aponta o laser para os olhos dele, o inimigo fica cego de um olho, que ganha tempo para voce fugir",
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
    titulo: "",
    imagem: "",
    historia:
      "Andando pelo castelo acaba encontrando a cozinha, onde consegue ver pacotinhos do seu pate favorito de atum! <br> Parece que suas oracoes ao Grande Deus Gato Pancudo foram atendidas, pois esta faminto",
    escolhas: [
      {
        escolha: "Comer todos que puder",
        destino: "final2",
      },
      {
        escolha: "Comer 1 e guardar o restante na sua mochila para mais tarde",
        destino: "batalha2",
      },
    ],
  },
  final: {
    titulo: "",
    imagem: "",
    destinoInicial: 'inicio',
    buttonText: "Let's try this again"
  },
  final2: {
    titulo: "Voce comeu demais, acabou dormindo na cozinha e foi encontrado por um cao guarda",
    imagem: "",
    destinoInicial: 'inicio',
    buttonText: "Let's try this again"
  }
};

//criando a nova pag do jogo ao clicar no botao

startBtn.addEventListener("click", mostrarCena);

function mostrarCena() {
  gameBoard.innerHTML = `
    <header>
      <h1> ${historia[historia.passoAtual].titulo} </h1>
        
    </header>

    <div>
        <img class="logo" src="./${historia[historia.passoAtual].imagem}" />
        <p>${historia[historia.passoAtual].historia}</p>
        ${getInput()}
        <button id="btnEnviar" class="shadow p-3 mb-5 bg-body-tertiary rounded">Proximo</button>        
    </div>       
    `;
  //ao clicar no botao "proximo", seguir p/ a opcao selecionada
  const btnEnviar = document.querySelector("#btnEnviar");
  btnEnviar.addEventListener("click", () => {
    getInputValue();
  });
}

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
}

//funcao que percorre os elementos da historia e pega
//as escolhas disponiveis
function getInput() {
  var input = "";
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
