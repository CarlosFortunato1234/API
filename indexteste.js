import express from "express";

const app = express();
app.use(express.json());

// 1. Produto e preço
// GET - RECEBA O NOME E O PREÇO DE UM PRODUTO.
// MOSTRE UMA MENSAGME INFORMANDO QUANTO O PRODUTO CUSTA. 
app.get("/api/produto", (req, res) => {
  const nome = req.query.nome;
  const preco = Number(req.query.preco);

  res.send({ mensagem: `O produto ${nome} custa R$ ${preco}.` });
});

// 2. Área do terreno
//RECEBA O COMPRIMENTO E A LARGURA DE UM TERRENO 
//CALCULE E MOSTRE A ÁREA DO TERRENO EM M2
app.get("/api/terreno", (req, res) => {
  const comprimento = Number(req.query.comprimento);
  const largura = Number(req.query.largura);

  res.send({ metrosQuadrados: comprimento * largura });
});
//ESSE TIPO SEM CRUD É DIRETO NA URL 
http://localhost:3000/api/terreno?comprimento=20&largura=10


// 3. Valor de cada parcela


//RECEBA O VALOR TOTAL DE UMA COMPRA E O NRO DE PARCELAS
//CALCULE E MOSTRE O VALOR DE CADA PARCELA
app.get("/api/parcelas", (req, res) => {
  const total = Number(req.query.total);
  const parcelas = Number(req.query.parcelas);

  if (parcelas <= 0) {
    return res.send({ mensagem: "Informe uma quantidade de parcelas maior que zero." });
  }

  res.send({ valorParcela: total / parcelas });
});

//http://localhost:3000/api/parcelas?total=1000&parcelas=5

// 4. Dias em horas

//RECEBA A QUANTIDADE DE DIAAS QUE UMA PESSOA VIAJOU
//MOSTR QUANTAS HORAS ESSE PERÍODO REPRESENTA.

//no post vai la no body do json

app.post("/api/viagem", (req, res) => {
  const dias = Number(req.body.dias);

  res.send({ horas: dias * 24 });
});
//exemplo:
//{
  //  "dias":20
//}


// 5. Saldo com 2% de rendimento
//RECEBA O VALOR DE UM DEPÓSITO BANCÁRIO
//ADICIONE 2% DE RENDIMENTO E MOSTRE O SALDO FINAL
app.post("/api/deposito", (req, res) => {
  const deposito = Number(req.body.deposito);
  const rendimento = deposito * 0.02;

  res.send({ saldo: deposito + rendimento });
});

//{
 //   "deposito":200
    
//}

// 6. Consumo médio em quilômetros por litro
//RECEBA A QUANTIDADE EM LITROS DE COMBUSTÍVEL CONSUMIDOS E A DISTÂNCIA PERCORRIDA
//CALCULE E MOSTRE O CONSUMO MÉDIO EM KM POR LITRO
app.post("/api/consumo", (req, res) => {
  const litros = Number(req.body.litros);
  const distancia = Number(req.body.distancia);

  if (litros <= 0) {
    return res.send({ mensagem: "Informe uma quantidade de litros maior que zero." });
  }

  res.send({ kmPorLitro: distancia / litros });
});
//{
    //"litros":200,
  //  "distancia":20
    
//}


// 7. Antecessor e sucessor
//Receba um número e mostre seu antecessor e seu sucessor.
app.post("/api/vizinhos", (req, res) => {
  const numero = Number(req.body.numero);

  res.send({ antecessor: numero - 1, sucessor: numero + 1 });
});

// 8. Idade em semanas
//RECEBA A IDADE DE UMA PESSOA EM ANOS, MOSTRE QUANTAS SEMANAS ELA JÁ VIVEU CONSIDERANDO
//52 SEMANAS POR ANO
app.post("/api/idade", (req, res) => {
  const idade = Number(req.body.idade);

  res.send({ semanas: idade * 52 });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});