import { randomBytes, scryptSync } from "crypto";

function criaSalEHashSenha(senhaDigitada) {
    const salSenha = randomBytes(16).toString("hex");

    const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString("hex");

    return { salSenha, hashSenha };
}

export default criaSalEHashSenha;