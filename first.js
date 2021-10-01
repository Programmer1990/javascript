// filter function
// we used this function to get those digits, those are divided by 2
// here we have to put condition on X , if the condition is true then
// it will pass other wise no.
//let array1=[2,5,7,10];
//let array2=array1.filter(x=> x%2==0);
//console.log(array2);
// understand by anonymus function below

let array1=[2,5,7,10];
let array2=array1.filter(function(x){
    if(x%2==0){
        return x;
    }
});
console.log(array2);

//same result as by arrow function. 