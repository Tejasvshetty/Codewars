function zeros (n) {
  let total = 0;
  for (let i = 1; i<= (Math.log(n) / Math.log(5)); i++){
    total += Math.floor(n/Math.pow(5, i))
  }
  return (total)
}
