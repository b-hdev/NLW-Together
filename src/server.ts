import express from "express";

const app = express();

/*
* Get    => Search info
* Post   => Insert info
* Put    => Change info
* Delete => Remove info
* PATH   => Change specific info
*/

app.get("/test", (request, response) => {

/*
* Req = Request  => Entrando
* Res = Response => Saindo
*/

    return response.send("Hello GET")
})

app.post("/test-post", (request, response) => {

    return response.send("Hello POST")
})

//Iniciando o servidor
app.listen(3000, () => console.log("Server is running"))