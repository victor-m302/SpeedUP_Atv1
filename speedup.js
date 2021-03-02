let algo2 = [0.0069733142852783205,
    0.00393916924794515,
    0.005597957558102078,
    0.08088997630896391,
    0.028499628314913053,
    0.012213326335269236,
    0.6158959909024506]
   let algo3 = [0.006833346684773763,       
    0.002924451298183865,        
    0.012480831446471037,
    0.09791602612542517,
    0.17608385547035516,
    0.010979431623893837,
   0.4425477571153582]
   
   
   let processador = 1 //single core 
   let tempoInicial;
   let tempoFinal;
   let speedup = [];
   
   for (let index = 0; index < algo3.length; index++) {
        tempoInicial = algo2[index] + algo3[index]
        tempoFinal = algo2[index] / processador + algo3[index] / processador
        speedup.push(tempoInicial / tempoFinal)
   }
   console.log("speedup: "+ speedup)