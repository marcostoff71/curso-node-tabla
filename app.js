const argv = require('./config/yargs')
const {crearArchivoTabla,crearArchivoTablaSync,creaStringTabla,creaStringTablaColores} = require('./helpers/multiplicar') 
const colors = require('colors/safe');
require('colors')



let base=argv.b;

if(argv.l){
    console.log(creaStringTablaColores(base,argv.h?argv.h:null));
}
if(argv.h){
    
    crearArchivoTabla(base,argv.h)
    .then( (nombre) => console.log(colors.cyan.underline( `Archivo ${nombre} creado con exito`)))
    .catch( (err) => console.log(err) );
    
}else{
    
    
    crearArchivoTabla(base)
    .then( (nombre) => console.log(colors.cyan.underline( `Archivo ${nombre} creado con exito`)))
    .catch( (err) => console.log(err) );
    
 
}


