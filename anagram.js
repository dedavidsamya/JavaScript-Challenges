//Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order
let test = ['code', 'doce', 'ecod', 'framer', 'frame', 'rfame']

function anagram(arrayOfStrings) {
  let noAnagrams = [] 
  let arrayOfSortedStrings =[]
//for each element : 
//transform the string into an array and sort the array
// compare it to the next element, if they are the same, push the first one into a new array
arrayOfStrings.forEach ( (word) => {
  let sortedString = [...word].sort().join('')
  if (!arrayOfSortedStrings.includes(sortedString)){
  noAnagrams.push(word)
  arrayOfSortedStrings.push(sortedString)
  }
  console.log(noAnagrams);
  console.log(arrayOfSortedStrings);
})
}
anagram(test)
