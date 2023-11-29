function sumIntervals(intervals) {
  intervals.sort(function(a,b){return a[0]-b[0]})
  let start = intervals[0][0];
  let end = intervals[0][1]
  let temp_start = start;
  let difference = 0;
  for (let i = 0; i<intervals.length; i++){
    if (intervals[i][0] >=temp_start){
      temp_start = intervals[i][0]
      if (temp_start >= end){
        difference += end - temp_start
      }
    }
    if (intervals[i][1] >= end){
      end = intervals[i][1]  
    }
  }
  return (end - start + difference)
}
// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
