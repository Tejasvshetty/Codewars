function rgb(r, g, b) {
    x = {0:0, 1:1, 2:2, 3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:"A",11:"B", 12:"C", 13:"D", 14:"E", 15:"F"}
    
    if (r < 0 ){
      r = 0
    }
    else if (r > 255){
      r = 255
      
    }
  
  
    if (g < 0 ){
      g = 0
    }
    else if (g > 255){
      g = 255
    }
  
    if (b < 0 ){
        b = 0
      }
  
    else if (b > 255){
      b = 255
    }
    console.log((x[Math.trunc(r/16)]))
    return (`${x[Math.trunc(r/16)]}${x[r%16]}`
            + `${x[Math.trunc(g/16)]}${x[g%16]}`
            + `${x[Math.trunc(b/16)]}${x[b%16]}`)
            
}
