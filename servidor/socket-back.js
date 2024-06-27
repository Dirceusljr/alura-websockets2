import "dotenv/config.js"
import io from "./servidor.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";

io.on("connection", (socket) => {
    registrarEventosCadastro(socket, io);
    registrarEventosLogin(socket, io);
    registrarEventosInicio(socket, io);
    registrarEventosDocumento(socket, io);
});
