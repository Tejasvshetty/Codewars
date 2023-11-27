// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].
function deleteNth(arr,n){
  let num = arr 
  let counted = []
  
  for (let i = 0; i <= arr.length; i++){
    let times = count(arr, arr[i])
    if (!counted.includes(arr[i])){
      if (times[times.length-1]>n){
        for (let i = 0; i<(times[times.length-1]-n); i++)
          num.splice(times[i],1)
        }
    }
      
      counted.push(arr[i])
      }
      return num
    }

function count(arr, x){
  let count = [0];
  let location =[]
  for (let i = 0; i <= arr.length; i++){
    if (arr[i] == x){
      count[0] = count[0]+1
      location.push(i)
    }
    }
  location = location.reverse()
  location.push(count)
  return (location)
  }


// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// } Best practice for my reference (not my code)
