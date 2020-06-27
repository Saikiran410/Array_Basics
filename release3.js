var array = [1,2,1,2,3,4,4,"apple", "bannana", "orange", "apple", "orange"];
var result = array.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
  });
  console.log(result);
  