let opA=0,opB=0;
let operacion='';

function obtenerA(){
    console.log(`entra a obtener a con ${operacion}`);
    if(document.getElementById('resu')=='0.0'){
        opA=0;
    }else opA=parseFloat(document.getElementById('resu').innerHTML)
    let btn = document.getElementsByClassName('operacion');
    for( let i in btn){
        btn[i].disabled=true;
    }
    console.log(`ya guarde a: ${opA}`);
    document.getElementById('resu').innerHTML="0.0";
    if(operacion=='raiz'){
        obtenerB();
    }else{
        document.getElementById('igual').addEventListener('click',obtenerB);
    }
}
function obtenerB(){
    console.log(`entra a obtener b con ${operacion}`);
    if(operacion=='raiz'){
        console.log('raiz');
        calcRescultado();
    }else if(document.getElementById('resu')=='0.0'){
        opB=0;
    }else opB=parseFloat(document.getElementById('resu').innerHTML)
    console.log('ya tengo B: '+opB);
    calcRescultado();
}
function calcRescultado(){
    let resultad=0;
    switch(operacion){
        case 'sumar':
            console.log(`resultado= ${opA+opB}`);
            document.getElementById('resu').innerHTML=opA+opB;
            break;
        case 'restar':
            resultad=opA-opB;
            console.log(`resultado= ${opA-opB}`);
            document.getElementById('resu').innerHTML=String(resultad);
            break;
        case 'multiplicar':
            console.log(`resultado= ${opA*opB}`);
            document.getElementById('resu').innerHTML=opA*opB;
            break;
        case 'porcentaje':
            console.log(`resultado= ${(opA)*(opB/100)}`);
            document.getElementById('resu').innerHTML=(opA)*(opB/100);
            break;
        case 'dividir':
            console.log(`resultado= ${opA/opB}`);
            document.getElementById('resu').innerHTML=opA/opB;
            break;
        case 'raiz':
            console.log(`resultado= ${Math.sqrt(opA)}`);
            document.getElementById('resu').innerHTML=Math.sqrt(opA);
            break;
    }
    terminar();
}
function terminar(){
    const botones = document.getElementsByTagName('button');
    for(let i in botones){
        if(botones[i].innerHTML !='AC'){
            botones[i].disabled=true;
        }
    }
}

function adNum(num){
    console.log("añadir numero  " +num);
    let res = document.getElementById('resu').innerHTML;
    if(res==0.0)
        res='';
    res+=num;
    console.log(res);
    document.getElementById('resu').innerHTML=res;
}

function limpiar(){
    document.getElementById('resu').innerHTML='0.0';
    let btn = document.getElementsByTagName('button');
    for( let i in btn){
        btn[i].disabled=false;
    }
    opA=0;
    opB=0;
    operacion='';
}
function borrar(){
    res=document.getElementById('resu').innerHTML;
    if (res.length ==1){
        res='0.0'
    }else if (res.length>1 && res!='0.0'){
        res=res.slice(0,-1);
    }
    document.getElementById('resu').innerHTML=res; 
}
function operar(opcion){
    operacion=opcion;
    console.log(`entra a operar con ${operacion}`);
    obtenerA();
}
