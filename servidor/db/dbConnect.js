import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.DB_URL);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets2");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
