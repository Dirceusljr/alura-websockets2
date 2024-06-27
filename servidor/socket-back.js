import "dotenv/config.js"
import io from "./servidor.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";

io.on("connection", (socket) => {

registrarEventosInicio(socket, io);
registrarEventosDocumento(socket, io);
registrarEventosCadastro(socket, io);
});
