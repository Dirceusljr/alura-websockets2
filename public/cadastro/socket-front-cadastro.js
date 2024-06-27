const socket = io();

function emitirCadastroUsuario (dados) {
    socket.emit("cadastro_usuario", dados)
}

export { emitirCadastroUsuario }