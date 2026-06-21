const express= require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "HOLA DESDE KUBERNATES";

app.get("/",(req,res)=>{
	res.json({mensaje:MESSAGE,version: "1.0.0"});
});

app.get("/health",(req,res)=>{
	res.status(200).json({status:"UP"});
});


app.listen(PORT, ()=> console.log(`Servidor escuchando en el puerto ${PORT}`));