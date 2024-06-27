function registrarEventosCadastro (socket, io) {
    socket.on("cadastro_usuario", (dados) => {
        console.log(dados)
    })
}

export default registrarEventosCadastro;