function pigIt(str){
  words = str.split(" ")
  letter = []
  pig_latin = ""
  words.forEach(element => letter.push(element.split("")[0]))
  for (let i = 0; i < words.length; i++){
    if (!(words[i] >= "a" && words[i] <= "z") && !(words[i] >= "A" && words[i] <= "Z")){
      pig_latin += words[i] + " "
      
    }
    else{
      pig_latin += words[i].slice(1,words[i].length) + letter[i] + "ay "
    }
  }
  return(pig_latin.slice(0,pig_latin.length-1))
  }
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// } regex alternative solution example (not my own (best practice))
