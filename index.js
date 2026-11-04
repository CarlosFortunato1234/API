import express from "express";
import db from './repository/index.js'
const app = express();

app.use(express.json ())
 
//C
app.post("/api/v1/livro", (req, res) => {
 //const id = req.body.id
// const cpf = req.body.cpf
// const email = req.body.email
 const {id, nomelivro, autor} = req.body

   if( !id || !nomelivro || !autor){ 
//avisar que é pra enviar tudo
 res.send ({ message: "Envie todas as informações para o cadastro!"})
 return
   }
    
  //cadastrar no banco
  db.push({ id, nomelivro, autor}) 
  res.send ({ message: "Livro cadastrado com sucesso"})
})
//R
app.get("/api/v1/livro", (req, res) => {

res.send (db);


})

app.get("/api/v1/livro/:id", (req, res) => {

const id = Number(req.params.id)
const livro = db.find(item => item.id === id)

res.send (livro);


})
//U
app.put("/api/v1/pessoa/:id", (req, res) => {})
//D
app.delete("/api/v1/pessoa/:id", (req, res) => {})

 
app.listen(3004, () => {
  console.log(`Servidor rodando em http://localhost:3004`);
});
