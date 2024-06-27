import criaSalEHashSenha from "../utils/criaSalEHashSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
    return usuariosColecao.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }) {
    const { salSenha, hashSenha } = criaSalEHashSenha(senha);

    return usuariosColecao.insertOne({ nome, salSenha, hashSenha });
}

export { cadastrarUsuario, encontrarUsuario }