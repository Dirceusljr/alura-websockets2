import jwt from "jsonwebtoken"

function autorizaUsuario (socket, next) {
    const tokenJwt = socket.handshake.auth.tokenJwt;

    try {
        jwt.verify(tokenJwt, process.env.SECRET_JWT);
        next();
    } catch (erro) {
        next(erro);
    }
}

export default autorizaUsuario;