function solution(str, ending){
    if (ending != '') return ending == (str.slice(-1*ending.length))
    else return true
  }