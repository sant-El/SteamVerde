const prompt = require("prompt-sync")();

const jogos = [];

const criar = () => {
  const nome = prompt(`Nome do jogo: `);
  const anoLancamento = prompt(`Ano de lançamento: `);
  const duracao = prompt(`Duração média do jogo (horas): `);
  const preco = prompt(`Preço : `);
  const estudio = prompt(`Estúdio: `);
  const sequencia = prompt(`Qual é a sequência do jogo? `);
  if (nome != "" &&
   anoLancamento >= 1962 &&
    anoLancamento <= 2024 &&
     duracao > 0 &&
      preco == 0 &&
       estudio != "" &&
        sequencia > 0 &&
         (sequencia < jogos.length ||
             jogos.length == 0) 
          ) {
            jogos.push({
                nome, anoLancamento, duracao, preco, estudio, sequencia
            })
        console.log (`Jogo cadastrado com sucesso! `)
  }else {
    console.log (`Ops! Algo deu errado. :()`)
  }
};
