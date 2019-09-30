const fs = require('fs');
const colors = require('colors');


//Funcion de listar una tabla de multiplicar
let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('===================='.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

//Funcion que hace la logica y retorna una promesa
let crearArchivo = (base, limite = 20) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero!`);
            return;
        }

        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //FileSystem con funcion para crear un archivo tipo texto.
        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt `, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}`);
            }
        });
    });
}


//Export de modulos
module.exports = {
    crearArchivo,
    listarTabla
}