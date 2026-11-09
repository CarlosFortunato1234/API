# Exercícios de API com Express

Este projeto reúne 8 exercícios de backend feitos com Node.js e Express.

- **Exercícios 1 a 3:** usam `GET` e recebem os dados pela URL (`req.query`).
- **Exercícios 4 a 8:** usam `POST` e recebem os dados em JSON no corpo da requisição (`req.body`).

## Como rodar

Abra a pasta do projeto no VS Code e execute no terminal:

```bash
npm install
npm run dev
```

A API vai rodar em `http://localhost:3000`.

## Como testar no Postman

Escolha o método e cole o endereço da tabela. Para **GET**, deixe **Body → none**. Para **POST**, selecione **Body → raw → JSON** e cole o JSON do exemplo. Depois clique em **Send**.

| Exercício | Método | URL | Body (JSON) | Resultado esperado |
|---|---|---|---|---|
| 1. Produto e preço | GET | `http://localhost:3000/api/produto?nome=Caderno&preco=12.50` | — | `{"mensagem":"O produto Caderno custa R$ 12.5."}` |
| 2. Área do terreno | GET | `http://localhost:3000/api/terreno?comprimento=20&largura=10` | — | `{"metrosQuadrados":200}` |
| 3. Valor da parcela | GET | `http://localhost:3000/api/parcelas?total=120&parcelas=3` | — | `{"valorParcela":40}` |
| 4. Dias em horas | POST | `http://localhost:3000/api/viagem` | `{"dias":3}` | `{"horas":72}` |
| 5. Depósito com 2% de rendimento | POST | `http://localhost:3000/api/deposito` | `{"deposito":1000}` | `{"saldo":1020}` |
| 6. Consumo médio | POST | `http://localhost:3000/api/consumo` | `{"litros":10,"distancia":120}` | `{"kmPorLitro":12}` |
| 7. Antecessor e sucessor | POST | `http://localhost:3000/api/vizinhos` | `{"numero":8}` | `{"antecessor":7,"sucessor":9}` |
| 8. Idade em semanas | POST | `http://localhost:3000/api/idade` | `{"idade":19}` | `{"semanas":988}` |

Use ponto para os números decimais, como `12.50`.

## Autor

Carlos Daniel