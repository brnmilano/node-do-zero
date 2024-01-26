// Resquest -> Obtem dados da requisicão que o usuário está fazendo para o meu servidor;
// Response -> Devolve uma resposta para o usuário;
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

// POST -> Criar uma informação -> http://localhost:3333
// GET -> Buscar uma informação -> http://localhost:3333
// PUT -> Alterar uma informação -> http://localhost:3333/1
// DELETE -> Remover um dado -> http://localhost:3333/1

server.post("/videos", (request, response) => {
  database.create({
    title: "Vídeo 01",
    description: "Esse é o vídeo 01",
    duration: 180,
    url: "https://www.youtube.com/watch?v=QfcozcbDhNM",
  });

  console.log(database.list());
});

server.get("/videos", (request, response) => {
  return "Teste GET";
});

// Route Parameter:
// O id é o identificador único do recurso que será alterado ou removido
// O id geralmente é um número -> http://localhost:3333/1
server.put("/videos/:id", (request, response) => {
  return "Teste PUT";
});

server.delete("/videos/:id", (request, response) => {
  return "Teste DELETE";
});

server.listen({
  //localhost:3333
  port: 3333,
});

// Parei em 33:38 