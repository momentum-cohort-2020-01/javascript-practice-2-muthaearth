// // 1. Create a function called "remove" that takes an array and a potential
// // member of the array, and returns a new array with that member removed.
// // For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// // in `['Cadence', 'Ordel']`.
// //

// // If the potential member is not in the array, return the array unchanged.
// // If the potential member is in the array, remove all instances of it from the array.

// //poMem is the target array
// //a loop on members will check for number of values
// //poMember.filter returns poMember not in members
// //and temporarily stores poMember in rem
// //if any value held in rem exists in members remove it
// //Otherwise, return members unchanged

// // function remove(poMember, members) {
// //   for(let i = 0; i < members.length; i++) {       
// //   return poMember.filter(function(rem) {
// //       if (rem === members, [i]) {
// //         members.pop()
// //   } return members;
// // }); 
// // }
// // }
//members = [['Eenie', 'Meanie', 'Miny', 'Moe'], 'Moe']

function remove(members, poMember) {
  let rem=[];
  for(let i = 0; i < members.length; i++) {    
      if (poMember !== members[i] ){
        rem.push(members[i])
  } 
}; return rem;
}
//members =[['Dixie', 'Trixie', 'Quicksee', 'FixC'], 'FixC']

// // 2. Revisit your "remove" function. Make sure that it does not change the original
// // array but instead returns a new array.

// //Members array has constant elements (on the test backend)
// //function addMember parameter arr uses .push to add an element to arr
// //newMembers is the new array consisting of members and arr
// //addMember is called with the argument of members;
// //it will execute the code inside addMembers
// //output newMembers array

// no code required!

// // 3. Create a function called "sum" that takes an array of numbers and
// // returns the sum of those numbers.

// //Each value will be added to arrSum as it loops through sum.reduce function
// //sum.reduce function receives to params a and b.
// //a will accumulate sum through each value passed through the function.
// //b will hold the current value being add to sum
// //arrSum will initialize at zero

function sum (process){ 
  return process.reduce(function(a,b){
      return (a + b)
    }, 0);
  } 
  
// // 4. Create a function called "average" that takes an array of numbers
// // and returns the average of those numbers.

// //arr.reduce function reduces a values plus b value to a single sum
// //that sum is held in arrAvg and is next divided by the length 
// //(count of values) in the arrAvg
// //to arrive at arr

function average (arrAvg) {
  arrAvg.reduce((a,b) => (a + b, 0)) / arrAvg.length;
  return arrAvg
}


// // 5. Create a function called "minimum" that takes an array of numbers and
// // returns the smallest number in that array.

// //spread operator within Math.min function will expand array and
// //insert each variable as a separate param.
// //each param is processed through arrMin and 
// //reduced to its lowest value returned to minimum
// const arrMin = minimum, => Math.min(...minimum);

// // 6. There are many techniques to sort arrays in programming. Your programming
// // language will likely include the ability to do this. We are going to
// // implement sorting ourselves, however.
// //

// // A "selection sort" is one of the most simple sorting algorithms. To implement it,
// // you start with an unsorted array of numbers. You search the array and find the
// // smallest number in the array. You then insert that into a new array as the first
// // element and remove it from the original array. You continue doing this until
// // there are no numbers left in the original array.
// //
// // Create a function called selectionSort that takes an array of numbers and returns
// // a sorted array using the above technique.
// //
// // Note 1: You do not actually want to delete things from the original array. You
// // should copy it first. To copy an array, use the following code:
// //
// // var arrayCopy = array.slice(0);
// //
// // Think about why this works.
// //
// // Note 2: Selection sort can be implemented using one array. Read the explanation at
// // https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// // to see how. This may make more sense to you.

// const selectionSort = (num) => {
//     var numCopy = num.slice(0)
//     num.forEach((val, i, arr) => {
//     const smallest = Math.min(...arr.slice(i))
//     const smallestIdx = arr.indexOf(smallest)
    

//     if (arr[i] > arr[smallestIdx]) {
//       const temp = arr[i]
//       arr[i] = arr[smallestIdx]
//       arr[smallestIdx] = temp
//     }
//   })
//   return numCopy

// // 7. Create a function called `textList` that takes an array and joins its elements
// // into a string separated by commas.
// //


// // For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// // `"Cadence,Ordel,Marion"
