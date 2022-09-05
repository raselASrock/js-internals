// console.log(`first`)
// console.log(`second`)
// // console.log(`third`)
// setTimeout( ()=>{
//     console.log('third');
// })
// console.log(`forth`)
// console.log(`fifth`)


// console.log(`first`)
// console.log(`second`)
// // console.log(`third`)
// setInterval( ()=>{
//     console.log('third');
// })
// console.log(`forth`)
// console.log(`fifth`)


// console.log(`first`)
// console.log(`second`)
// // console.log(`third`)
// setInterval( ()=>{
//     console.log('third');
// }, 1000)
// console.log(`forth`)
// console.log(`fifth`)


console.log(`first`)
console.log(`second`)
let seconds = 0;
const intervalID = setInterval( ()=>{
    console.log(seconds++);
    if( seconds === 10 ){
        clearInterval(intervalID)
    }
}, 1000)
console.log(`forth`)
console.log(`fifth`)