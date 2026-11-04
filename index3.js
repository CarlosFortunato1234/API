//3. Peça o peso de 5 pessoas
//  e calcule a média desses pesos. Mostre o resultado.

import express from "express";

const mediapeso = express();




mediapeso.get ("/api/mediapeso", (req, res) => {
   const peso1 = Number (req.query.peso1)
   const peso2 = Number (req.query.peso2)
   const peso3 = Number (req.query.peso3)
   const peso4 = Number (req.query.peso4)
   const peso5 = Number (req.query.peso5)



   res.send ({ media:  (peso1 + peso2 + peso3 + peso4 + peso5 ) / 5  })

})



mediapeso.listen (3003, () => { 
    console.log ("Servidor rodando em localhost 3003 exericio3 ")
})