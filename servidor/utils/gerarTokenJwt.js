import jwt from "jsonwebtoken";

function gerarTokenJwt(payload) {
    const tokenJwt = jwt.sign(payload, process.env.SEGREDO_JWT, 
        {
            expiresIn: "1h"
        }
    )

    return tokenJwt;
}

export default gerarTokenJwt;