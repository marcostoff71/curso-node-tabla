const yargs = require("yargs");
const argv= yargs
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'

})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la tabla en consola'
})
.option('h',{
    alias:'hasta',
    type:'number',
    describe:'Indica hasta que numero se multiplicara'
})
.check( (argv,option) =>{
    
    if(isNaN(argv.base)){
        throw 'La base tiene que ser un numero'
    }else if( argv.hasOwnProperty('h') ) {
        
        if(argv.h==null){
            throw 'El valor no debe ser nulo'
        }else if(isNaN(argv.h)){
            throw 'El numero hasta el cual se multiplicara debe ser un entero'
        }else if(argv.h<10){
            throw 'El numero hasta el cual se multiplicara debe ser mayor o igual a 10'
        }else{
            return true;
        }
    }
    else{
        return true
    }
} )
.argv;

module.exports =argv