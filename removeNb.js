function removeNb (n) {
  total = (n)*(n+1)/2
  track = []
  for (let i = 1; i<=n; i++){
    let b = (total - i)/(1+i)
    if (Number.isInteger(b) && b<n){
      track.push([i, b])      
    }
  }
  return track
}
// Problem: A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
