import express from "express";

const apisoma1 = express();

apisoma1.get("/api/soma", (req, res) => {
   const num1 = Number (req.query.num1)
   const num2 = Number (req.query.num2)

   res.send ({soma: num1 + num2 })

  


})


apisoma1.listen(3001, () => {
    console.log("servidor rodando em localhost 3001");
    
})

