let algo1 = [ 0.00292664368947347,
     0.0029042183028327095,
     0.13184345701888756,
     0.03019810946105439,
     1.1165665948494667,
     0.03881555982465345,
     8497.06417921921
    ]
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
   

   let speedup1 = [];
   let speedup2 = [];   
   
   for (let i = 0; i < algo3.length; i++) {
        speedup1.push(algo1[i] / algo2[i])
        speedup2.push(algo1[i] / algo3[i])
   }

console.log("speedup = algo1/algo2");
for (let i = 0; i < algo3.length; i++) {
     console.log(speedup1[i])
}
console.log("speedup = algo1/algo3");
for (let i = 0; i < algo3.length; i++) {
     console.log(speedup2[i])
}