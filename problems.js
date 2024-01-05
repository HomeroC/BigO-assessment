// #1 BigO: time: O(n) space: O(1)

const zeroSum = (arr) => { 
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        if(total === 0){
            return true;
        } else {
            return false;
        }
    }
}
console.log(zeroSum([1, 2, 3, -2])) 


// #2 BigO: time: O(n) space: O(1) 
const hasUniqueChars  = str => {
    let hash = {}
    for (let char of str) {
      if(hash[char]) {
        return false
      } else {
        hash[char] = true
      }
    }
    return true
}
  
console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))


// #3 BigO: time: O(n) space: O(1)
const isPanagram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let char of alphabet) {
        if(str.indexOf(char) === -1) {
            return false
        }
    }
    return true
 }

console.log(isPanagram('The quick brown fox jumps over the lazy dog.'))


// #4 BigO: time: O(n) space: O(n)
const findLongestWord = (arr) => {
    let longest = ""
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    return longest.length
}
console.log(findLongestWord(["hi", "hello", "bye"]))