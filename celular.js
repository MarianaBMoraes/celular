//crud de celular (dono, modelo, marca, cpu, ram, memoria, mp_camera)

const prompt = require("prompt-sync")();

const celular = [];

const modelo = () => {
  const nome = prompt("Digite o nome do dono: ");
  const modelo = prompt("Digite o modelo do celular: ");
  const marca = prompt("Digite a marca do celular: ");
  const cpu = prompt("Digite qual a CPU do celular: ");
  const ram = prompt("Digite o valor da memória RAM do celular: ");
  const memoria = prompt("Digite o valor da memória do celular: ");
  const mp_camera = prompt(
    "Digite o valor de megapixels da câmera do celular: "
  );

  if (
    //validar os dados recebidos.
    nome != "" && // nome tem que ser diferente de "string" vazia.
    modelo != "" &&
    marca != "" &&
    cpu != "" &&
    ram > 0 && // '>' maior que zero.
    memoria > 0 &&
    mp_camera > 0
  ) {
    return {
      // return acaba com a execução da função, por isso não faz diferença usar 'else'.
      nome,
      modelo,
      marca,
      cpu,
      ram,
      memoria,
      mp_camera,
    };
  }

  console.log("Dados inválidos!"); // se os dados não passarem pela validação, aparece 'Dados inválidos!'.
  return; // return vazio, é um retorno 'undefined', retorna toda a função.
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    celular.push(novo); // adicionar no array.
    console.log("Celular adicionado com sucesso.");
  }
};

const listar = () => {
  if (celular.length == 0) {
    console.log("Nenhum celular foi criado ainda!");
  }

  // 'el' : elemento / i: indice, para cada elemento faça isso ...
  celular.forEach((el, i) => {
    // função forEach() recebe um callback (ou seja, outra função como parâmetro).
    console.log(`${i + 1}.
        Nome: ${el.nome},
        Modelo: ${el.modelo},
        Marca:  ${el.marca},
        CPU: ${el.cpu},
        RAM: ${el.ram}
        Memória: ${el.memória}
        MP Câmera: ${el.mp_camera}
        `);
  });
};

const atualizar = () => {
  listar();

  const indice = prompt("Qual o indice que deseja atualizar: ") - 1;

  const novo = modelo();

  if (novo && indice >= 0 && indice < celular.length) {
    celular[indice] = novo;
    console.log("Celular atualizado com sucesso!");
  } else {
    console.log("Indice inválidoo!");
  }
};

const remover = () => {
  listar();

  const indice = prompt("Qual indice deseja remover: ") - 1; // -1 para começar no indice certo, e não a partir de 0.

  if (indice >= 0 && indice < celular.length) {
    celular.splice(indice, 1);
  } else {
    console.log("Indice inválido!");
  }
};

module.exports = {
  criar,
  listar,
  atualizar,
  remover,
};
