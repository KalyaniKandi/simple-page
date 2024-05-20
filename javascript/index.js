let fruit =['Apple','banana', 'cherry']
console.log(fruit);

//let car = new Array('KTM,Bmw','audi','Mg');
console.log(car)

//push element
car.push('KIA');
console.log(car)

//pop element
let popEle =car.pop();
console.log(popEle)
console.log(car)

let number =[3,4,5,6,7,8,9]; //main array
let new_array =number.slice(3)
console.log(number)
console.log(new_array)


//nested Array
let nesArr = [2,44,45,[3,4,5,6,7]]
let newARR = nesArr[3].slice(0,4);
console.log(nesArr)
console.log(newARR)

//shift and unshift
//(shift remove element/ unshift  add element)

//car.unshift ['KTM'];
//console.log(car)

let car = new Array('BMW',' AUDI','MG', 'KIA','KTM');
let middleIndex= Math.floor(car.length/2);
console.log(middleIndex)
//car . slice(middleIndex,3)
//console.log(car)



//mapping /fashing iot /dom/ cls component using in javascript