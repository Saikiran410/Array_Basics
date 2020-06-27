//Removing elements from end
var array = [1,2,3,4,5];
array.length = 1;
console.log(array);

//Removing using Splice method
var fruits = ["Apple", "Banana", "Mango" ,"Orange", "Lemon"];
var removed = fruits.splice(0,1);
console.log(removed);

//Removing the first Element
var array2= ['zero', 'one', 'two', 'three'];
var remove = array2.shift(); //returns first('zero') element and removes reaminig
console.log(remove);

//Using Array Filter Method
var array3= [1,2,3,4,5];
var filtered = array3.filter(function(value, index, arr){ 
    return value < 2;
});
console.log(filtered);

//Removing elements by using Delete operator
var ary = [1,2,3,4,5];
var removed = delete ary[1,2,3,4];
console.log(removed); 

//NOT IN RELEASE O ,IN ADDITION
//pop method removes last Element
var array4 = [1, 2, 3, 4, 5, 6];
var removed = array4.pop(); // removes last(6) element and return remaining elements
console.log(removed);

