//. Peça o valor que a pessoa ganha 
// por hora e a quantidade de horas trabalhadas no mês
//  Mostre quanto ela vai receber
// no final do mês.



import express from "express";

const salario = express();



salario.get("/api/apurarsalario", (req, res) => {
    const valorhora = Number (req.query.valorhora)
    const horastrabalhadas = Number (req.query.horastrabalhadas)

    res.send({ salario: valorhora * horastrabalhadas})

   





})


salario.listen (3002, () => {
 console.log ('Servidor localhost 3002 exercicio2')

})