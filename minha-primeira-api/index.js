import express from 'express'

const app = express(); //primeiro pilar instancia do express

app.get("/hello", (req, res) => { //segundo pilar rotas
  res.send("Hello World!");
});

app.listen(3000); //terceiro pilar: porta a ser ouvida