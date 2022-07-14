const fs = require('fs');
const colors = require('colors');
const fsp = require('fs/promises');
const {creaStringTitulo} = require('./stringHelper')



const creaStringTabla = (num,hasta)=>{

    let salida='';
    
    salida+=creaStringTitulo(`Tabla del ${num}`)+"\n";
    salida+=creaStringTablaMulti(num,hasta);
    return salida;
}
const creaStringTablaColores = (num,limite=10) => {
    let salida='';
    let multi=0;
    salida+=creaStringTitulo(`Tabla del ${num}`)+"\n";
    salida=salida.cyan;

    for(let i=1;i<=limite;i++){

        multi=num*i;
        salida+=`${num} ${'x'.green} ${i} ${'='.red} ${multi} \n`;
    }

    return salida;

}

const crearArchivoTablaSync= async (num,hasta=10) =>{
    let salida=""
    let nombreArchivo=`./salida/Tabla-${num}.txt`;

    salida=creaStringTabla(num,hasta)
    try{

        await fs.writeFileSync(nombreArchivo,salida)
        
    }catch(err){
        throw err;
    }
    return nombreArchivo;
}


const crearArchivoTabla = (num,hasta=10) => {
    return new Promise((resolve,reject) => {
        let salida=""
        let nombreArchivo=`./salida/Tabla-${num}.txt`;

        salida=creaStringTabla(num,hasta)
        
        fsp.writeFile(nombreArchivo,salida)
            .then( ()=>
                    resolve(nombreArchivo)
                )
            .catch(err=>{

                reject(err)
            } )


    })
}


const creaStringTablaMulti = (num,hasta) => {
    let salida="";
    for(let i=1; i<=hasta; i++){ 
        salida += `${num} x ${i} = ${num*i}`;
        if(i!=hasta){
            salida+="\n"
        }
    }
    return salida;
}

module.exports = {
    crearArchivoTablaSync,
    crearArchivoTabla,
    creaStringTabla,
    creaStringTablaColores
}
