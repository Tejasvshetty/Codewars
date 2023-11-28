function primeFactors(n){
  let num = n
  console.log(n)
  let x = ""
     for (i = 2; i<=num; i++){
       if (num % i == 0){
         let c = component(num, i)
         if (c == 1){
           x+= "(" + i + ")"
         }
         else{
           x += "(" + `${i}**${c}` + ")"
         }
        if (num == 1){
          break
        }
         
         num = num / Math.pow(i, c)
     }     
  }
  return x
  }


function component(n, i, x = 0){
  if(n % i != 0){
    return x
  }
  
  else{
    return component(n/i, i, x += 1)
  }
  
}
