// React Assessments
// Weekend Project
// 1. Write a simple React component that simply prints "I am a component" to the screen.
// Be sure to include all necessary imports, exports, etc...
// import React, { Component } from 'react';

// class Assessment extends Component {
// 
//       render() {
//          let { print } = this.state
//           if (print === 'I am a component'){
//            return 'I am a component'
//          }
//        }
// }
// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state.
// To get more practice with this, write a vanilla javascript for loop that outputs the same thing
//as the map function below.

// var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
//
// stuffArray.map(function(el, i){
//   console.log(el + " is at index: " + i)
// })

// your for loop here, you can use the same stuffArray array
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.forEach(function(value, index){
  console.log(value + " is at index: " + index)
})

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find
//the signle lowest price from the array. Write a function that takes in an array of numbers,
// and returns the lowest price

var prices = [23, 12, 93, 77]
prices.sort(function(a, b){return a-b})
console.log(prices)
// or for returning lowest price only
let lowestPrice = prices[0];
for (var i = 0; i < prices.length; i++) {
    if(prices[i]<lowestPrice)
    {
        lowestPrice = prices[i];
    }

}
  console.log(lowestPrice);
