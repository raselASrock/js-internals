// console.log('first');
// console.log('second');
// console.log('third');
// console.log('forth');
// console.log('fifth');


// function doSomething(){
//     console.log('third');
// }
// console.log('first');
// console.log('second');
// doSomething()
// console.log('forth');
// console.log('fifth');


// function doSomething(){
//     console.log('third');
// }
// console.log('first');
// console.log('second');
// setTimeout(doSomething)
// console.log('forth');
// console.log('fifth');



console.log('first');
console.log('second');
setTimeout(() => {console.log('Third')}, 5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {console.log('response recieve'); return response.json()})
  .then(json => console.log(json))
console.log('forth');
console.log('fifth');