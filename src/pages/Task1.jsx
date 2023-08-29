import React from 'react';

// count how many times the number increases from the previouse one

const Task1 = () => {

    const input = `199
200
208
210
200 
207
240
269
260
263`

    const arr = input.split('\n').map(el => Number(el))
    
    let previous = arr[0]
    let previous2 = arr[0]
    let previous3 = arr[0]
    let count = 0 
    let count2 = 0
    let count3 = 0

    for(let i=0; i< arr.length; i++){
      if (arr[i] > previous){
        count = count + 1 
      }
      previous = arr[i]
    }

    arr.forEach(el => {
        if (el > previous2){
            count2 = count2 + 1 
        }
        previous2 = el
    });

    for (const el of arr) {
        if (el > previous3){
            count3 = count3 + 1 
        }
        previous3 = el
  }


    return (
        <div>
           <h1>count: {count}</h1>
           <h1>count2: {count2}</h1> 
           <h1>count3: {count3}</h1>
        </div>
    );
};

export default Task1;