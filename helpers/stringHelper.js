

const creaStringTitulo2 = async (msg="",lon=4,) =>{

    let salida="";
    let aux="";
    if(lon<2||lon%2!=0){
        throw 'Error longitud no valida o numero no par';
    }
    for(let i=0;i<msg.length+lon;i++){
        aux+="=";
    }
    for(let i=0;i<lon/2;i++){
        if(i==0){
            salida+='|';
        }
        else{
            salida+=" ";
        }
    }
    salida+=msg;

    for(let i=0;i<lon/2;i++){

        if(i!=(lon/2)-1){
            salida+=" ";
        }else{
            salida+="|";
        }
    }


    return `${aux}\n${salida}\n${aux}`;


}

const creaStringTitulo = (msg="") => {
    let salida="";
    let linea=""
    let msgAux=""
    for(let i=0;i<msg.length+4;i++) linea+="=";
    
    for(let i=0;i<4;i++){

        if(i<2){
            msgAux+=" ";
        }else{
            if(i==2){
                msgAux+=msg;
            }
            msgAux+=" "
        }
    }
    msg=msg.padStart(msg.length+2," ");
    msg=msg.padEnd(msg.length+2," ");
    
    salida=linea+"\n"+msg+"\n"+linea

    return salida;
}
module.exports={
    creaStringTitulo
}