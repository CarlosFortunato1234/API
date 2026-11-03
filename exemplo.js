import express from "express";
import db from './repository/index.js'
const app = express();

app.use(express.json ())
 
//C
app.post("/api/v1/pessoa", (req, res) => {
 //const id = req.body.id
// const cpf = req.body.cpf
// const email = req.body.email
 const {id, cpf, email} = req.body

   if( !id || !cpf || !email){ 
//avisar que é pra enviar tudo
 res.send ({ message: "Avisar que é pra enviar tudo"})
 return
   }
    
  //cadastrar no banco
  db.push({ id, cpf, email}) 
  res.send ({ message: "Pessoa criada com sucesso"})
})
//R
app.get("/api/v1/pessoa/:id", (req, res) => {})
//U
app.put("/api/v1/pessoa/:id", (req, res) => {})
//D
app.delete("/api/v1/pessoa/:id", (req, res) => {})

 
app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});


//exercicio1 