var array = [1, 2, 3, 4, 5, 6,7,8,9,10],
    sum = 0,
    product = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    product *= array[i];
    }
console.log('Sum of Array = '+sum +' '+'and '+' Product of Array =' +product); 