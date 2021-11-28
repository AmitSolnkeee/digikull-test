///question 1
(async () => {
    const arr = ['foo', 'bar', 'a', 'b'];
    for await (let a of arr) {
      console.log(a);
      await sleep(2000);
    }
  })();

//question ----- 3
for( let i = 0 ; i<20 ; i++){
   if(i%3 == 0){
       console.log(i)
   }
}

//--------question 5

var a = prompt('enter number between 1 to 100');
if(!a < 100){
    alert('Number not in range')
    prompt("Kindly enter valid number between 1 -100")
}else{
    alert('Good work! Number is between range of 1 to 100')
}


/// ---------------question 6

 function funct(x){
    x= x + "";
    return x.split('').reverse().join('')
}
console.log(funct(32243))
 

///---------------------question 7
function animal(namee){
    let arr =[];
    for(let i = 0, j=1 ; i<namee.length ; i++,j++){
        arr[i] = namee.substring(i,j);
    }
    let a = [];
    let b = '';
    let res =Math.pow(2,arr.length);
    for(var x = 0 ; x<res; x++){
        b='';
        for(let y =0 ; y<arr.length ; y++ ){
            if((x & Math.pow(2,y))){
                b +=arr[y]
            }
        }
        if(b !== ''){
            a.push(b)
        }
    }
    console.log(a.join('\n'))

}
animal('dog')


////-----------------question 9

const arr = [12,35,1,10,34,1];
let a = arr.sort((a,b) => {
    return b-a;
})
let second_high = a[1];
console.log(second_high)

///question 10--------------------------
let num = [2,3,4,5,6,7,8,9,10]
num = num.filter(itm => {
    for(let i = 2 ;i<Math.sqrt(itm); i++){
        if(itm % i === 0){
            return false;
        }else{
            return true
        }
    }
})
console.log(num)

///----------------question1 15 ---------------
function sum(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}
console.log(sum([2,3,4],[3,4,5]));

//question---------------4-------

function funct(){
    let num = prompt("any number");
    var sum = 0;
    for(let i = 0; i<=num ; i++){
        sum += i ;
    }
    console.log(sum)
}
funct();

//question

function funct(str){
    let a = '';
    for(let i = 0 ; i < str.length ; i++){
        if(a.indexOf(str[i] === -1)){
            a += str[i];
        }
    }
    return a;
}
console.log(funct('thequickbrownfoxjumpsoverthelazydog'));

/// react counter app, this was done in code sandbox
import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  }
}