const jwt = require('jsonwebtoken');

const generarJWT = (uid, nombre) => {
    const payload = {uid, nombre};
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) =>{
            if (err) {
                console.log(err);
                reject(err)
            } else {
                //todo bien todo correcto
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT 
}    