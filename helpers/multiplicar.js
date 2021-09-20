const fs= require('fs');
const colors = require('colors');

const crearArchivo=async(base=5,listar=false,hasta=10)=>{
    
    try {
        
        
        let salida='';
        let consola='';
        
        for (let i = 1; i <= hasta; i++) {
            consola +=` ${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`;
            salida +=` ${base} x ${i} = ${base*i} \n`;
        }
        if(listar){
        console.log('=========================='.green); 
        // console.log(`===== Tabla de ${base} =========`);
        console.log('   Tabla del: ',colors.blue(base));
        console.log('=========================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
        return `tabla-del-${base}.TXT`;
        
    } catch (err) {
        throw err;
    }
    
}

module.exports= {
    crearArchivo
}