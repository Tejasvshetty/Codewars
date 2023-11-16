function descendingOrder(n){
    let list_num = [];
    let str_num =""
    Array.from(String(n)).forEach(digit => {
      list_num.push(digit)})
    
   list_num=list_num.sort(function(a,b){return b-a})
   
   
   for (var i = 0; i<list_num.length; i++){
      str_num += list_num[i];
    }
                  
    return Number(str_num)
  }
    
//   Best practice return parseInt(String(n).split('').sort().reverse().join(''))
