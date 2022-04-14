//1. Write a function that reverses a number.
// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// };
//reverse a number
const reverseNumber = (n) => 
  Array.from(n.toString()).reverse().join('');
  console.log(reverseNumber(349210));
// 2. Write a function that returns a passed string with letters in alphabetical order.

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// 3. Write a function that accepts a string as a parameter and converts the first letter of each word of the string to uppercase.

function uppercase(str)
{
  var array = str.split(' ');
  var newarray = [];
    
  for(var x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newarray.join(' ');
}
console.log(uppercase("the quick brown fox"));

// // 4. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

  }

 console.log(isPrime(5));
 console.log(isPrime(8));

// // 5.  Write a function to extract unique characters from a string.
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  

console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// // 6 Write a function that will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// Write a function to apply the Bubble Sort algorithm to a given array.

const arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
const swap = (items, firstIndex, secondIndex) => {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};
const bubbleSort = (items) => {
  var len = items.length,
    i,
    j;
  for (i = len - 1; i >= 0; i--) {
    for (j = len - i; j >= 0; j--) {
      if (items[j] > items[j - 1]) {
        swap(items, j, j - 1);
      }
    }
  }
  return items;
};
console.log(bubbleSort(arr));

function codeB() {}

function codeA() {
  this.codeB();
}


module.exports = {reverseNumber, alphabet_order, isPrime, codeB, codeA};