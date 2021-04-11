const HashMap = require('./Hashmap')

main =() => {
  const lotr = new HashMap()
  lotr.MAX_LOAD_RATIO = 0.5
  lotr.SIZE_RATIO = 3

  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandolf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')

  console.log('Maiar =', lotr.get('Maiar')) // Sauron
  console.log('Hobbit =', lotr.get('Hobbit')) // Frodo
  // I am getting Sauron and Frodo because we have 2 keys storing 
  // 2 different values and its only showing the latter value 
  // due to not having anything to resolve collisions


  console.log(lotr._capacity)
  return lotr
  
}

// console.log(main())



// =====================================================================


const WhatDoesThisDo = function(){
  let str1 = 'Hello World.'; 
  let str2 = 'Hello World.';
  let map1 = new HashMap(); 
  map1.set(str1,10); // -> key: 'Hello World.', value: 10
  map1.set(str2,20); // -> (keys are the same) value: 20 
  let map2 = new HashMap();
  let str3 = str1; 
  let str4 = str2; 
  map2.set(str3,20); // key: 'Hello World.', value: 20
  map2.set(str4,10); // value: 10

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

// console.log(WhatDoesThisDo())

// Answer: collision happens. all the keys are the same, 
// so they system returns the latest one inserted in the hash map

// =====================================================================

// You don't need to write code for the following two drills. 
// use any drawing app or simple pen and paper 

// TODO: 1) Show your hash map after the insertion of keys 
// 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 
// m = 11 using open addressing and a hash function k mod m.

// [22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]



// TODO: 2) Show your hash map after the insertion of the keys 
// 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map 
// with collisions resolved by separate chaining. 
// Let the hash table have a length m = 9, and let the hash function be k mod m.

// [null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]

// =====================================================================

// TODO: Implement a function to delete all duplicated characters in a string 
// and keep only the first occurrence of each character. For example, if the 
// input is string “google”, the result after deletion is “gole”. 
// Test your program with a sentence as well such as 
// "google all that you think can think of".

function removeDuplicates(string) {
  const newMap = new HashMap()
  newMap.MAX_LOAD_RATIO = 0.5
  newMap.SIZE_RATIO = 3

  for (let i = 0; i < string.length; i++) {
    newMap.set(string[i])
  }

  let newString = ''
  newMap._hashTable.forEach(letter => {
      newString += letter.key
  })
  // console.log('hashTable: ', newMap._hashTable)
  return newString
}

// console.log(removeDuplicates('google')) // gole but i'm getting lego?
// console.log(removeDuplicates('google all that you think can think of')) 

// =====================================================================

// TODO: Write an algorithm to check whether any permutation of a string 
// is a palindrome. Given the string "acecarr", the algorithm should 
// return true, because the letters in "acecarr" can be rearranged to 
// "racecar", which is a palindrome. In contrast, given the word "north", 
// the algorithm should return false, because there's no way to rearrange 
// those letters to be a palindrome.

// input: 'acecarr'
// output: true

function palindrome(string) {
  const result = new Map();
  for (let i = 0; i < string.length; i++) {
      console.log(result);
      if (!result.delete(string[i])) {
          result.set(string[i], 1);
      }
  }
  console.log(result.size, result);
  if (result.size <= 1) {
      return true;
  } return false;
}

console.log(palindrome('acecarr')) // true;
console.log(palindrome('north')) // false;