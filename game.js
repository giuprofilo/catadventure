const startBtn = document.querySelector("#startBtn");
const nameInp = document.querySelector("#nameInp");
const gameBoard = document.querySelector("#gameBoard");

const historia = {
  passoAtual: "inicio",
  inicio: {
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
        destino: "sair",
      },
    ],
  },

  batalha: {
    imagem: "",
    historia:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, neque.",
    escolhas: [
      {
        escolha: "Rolar no Catnip",
        destino: "armadura",
      },
      {
        escolha: "Subir na cortina",
        destino: "esperar",
      },
    ],
  },
  fugir: {
    inicio: "<h1>Parte 3</h1>",
    historia:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa pariatur veniam odit rerum beatae deleniti porro dolores asperiores magnam.",
    escolhas: [
      {
        escolha: "Usar o laser",
        destino: "luta",
      },
      {
        escolha: "Fingir de morto",
        destino: "fugir",
      },
    ],
  },
};

//criando a nova pag do jogo ao clicar no botao

startBtn.addEventListener("click", mostrarCena);

function mostrarCena() {
  gameBoard.innerHTML = `
    <header>
        <img class="logo" src="./${historia[historia.passoAtual].imagem}" />
    </header>

    <div>
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
    }
  }
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
