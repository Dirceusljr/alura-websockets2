const socket = io();

function emitirCadastroUsuario (dados) {
    socket.emit("cadastro_usuario", dados)
}

socket.on("cadastro_sucesso", () => alert("Usuário cadastrado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro no cadastro."));
socket.on("usuario_existente", () => alert("O usuário já existe!"));

export { emitirCadastroUsuario }