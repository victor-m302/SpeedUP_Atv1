const {performance} = require("perf_hooks")
let t0,t1;
let v=[]
let media=0,passo=0,desvioPadrao=0
let checkPrimo=0;

function testaPrimoV3(numero) {
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i == 0)
            return false;
    }
    return true;
}



function medePerformance(numero){

    for(i=0;i<30;i++){
        t0 = performance.now()
        checkPrimo = testaPrimoV3(numero)
        t1 = performance.now()
        v.push(t1-t0)
    
    }
    //media de todos tempos de execução
    for(let i=0;i<30;i++){
        media+=v[i]
    }
    media=media/30
    console.log((checkPrimo) ? "É primo" : "Não é primo");    
    console.log("o numero testado é: "+numero);
    console.log("media é: "+media); 
    
    for(let i=0;i<30;i++){
        passo+=Math.pow((v[i]-media), 2)
    }
    
    desvioPadrao = Math.sqrt(passo/30)
    console.log("desvio padrão é: "+desvioPadrao)
    v=[]
}

medePerformance(7)
medePerformance(37)
medePerformance(8431)
medePerformance(13033)
medePerformance(524287)
medePerformance(664283)
medePerformance(3531271)
medePerformance(2147483647)
console.log("fim")