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

    return response.send("Hello, GET")
})

app.post("/test-post", (request, response) => {

/*
* Req = Request  => Entrando
* Res = Response => Saindo
*/

    return response.send("Hello, POST")
})

//Aqui onde iniciaremos o webserver! com a porta padrão 3000
app.listen(3000, () => console.log("Server is running"))