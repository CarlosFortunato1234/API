import express from "express";

const app = express();
app.use(express.json());

// 1. Produto e preço
app.get("/api/produto", (req, res) => {
  const nome = req.query.nome;
  const preco = Number(req.query.preco);

  res.send({ mensagem: `O produto ${nome} custa R$ ${preco}.` });
});

// 2. Área do terreno
app.get("/api/terreno", (req, res) => {
  const comprimento = Number(req.query.comprimento);
  const largura = Number(req.query.largura);

  res.send({ metrosQuadrados: comprimento * largura });
});

// 3. Valor de cada parcela
app.get("/api/parcelas", (req, res) => {
  const total = Number(req.query.total);
  const parcelas = Number(req.query.parcelas);

  if (parcelas <= 0) {
    return res.send({ mensagem: "Informe uma quantidade de parcelas maior que zero." });
  }

  res.send({ valorParcela: total / parcelas });
});

// 4. Dias em horas
app.post("/api/viagem", (req, res) => {
  const dias = Number(req.body.dias);

  res.send({ horas: dias * 24 });
});

// 5. Saldo com 2% de rendimento
app.post("/api/deposito", (req, res) => {
  const deposito = Number(req.body.deposito);
  const rendimento = deposito * 0.02;

  res.send({ saldo: deposito + rendimento });
});

// 6. Consumo médio em quilômetros por litro
app.post("/api/consumo", (req, res) => {
  const litros = Number(req.body.litros);
  const distancia = Number(req.body.distancia);

  if (litros <= 0) {
    return res.send({ mensagem: "Informe uma quantidade de litros maior que zero." });
  }

  res.send({ kmPorLitro: distancia / litros });
});

// 7. Antecessor e sucessor
app.post("/api/vizinhos", (req, res) => {
  const numero = Number(req.body.numero);

  res.send({ antecessor: numero - 1, sucessor: numero + 1 });
});

// 8. Idade em semanas
app.post("/api/idade", (req, res) => {
  const idade = Number(req.body.idade);

  res.send({ semanas: idade * 52 });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});