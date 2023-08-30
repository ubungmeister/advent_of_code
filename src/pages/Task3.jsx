import React from 'react';


// 1. Find the most comman number 
// 2. Find the least comman number
// 3. translate binary to decimal and multiply together

const Task3 = () => {
   const  input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

const row = input.split('\n').map(el => (el))

 let newArr = []
 const length = row[0].length
 let mostCommon = ''
 let leastCommon = ''
 
 for(let i=0; i< length; i++){
    newArr.push([])
 }

 for(let i=0; i< length; i++){
    for(let j=0; j< row.length; j++){
        newArr[i].push(row[j][i])
    }
  }

  for(let i=0; i< length; i++){
    let zero = 0
    let one = 0
    for(let j=0; j< newArr[i].length; j++){
    
        if (newArr[i][j] === '0'){
            zero++
        }else{
            one++
        }
    }
    leastCommon = zero > one ? leastCommon + '1' : leastCommon + '0'
    mostCommon = zero > one ? mostCommon + '0' : mostCommon + '1'

  }

  const decimalMost = parseInt(mostCommon, 2);
  const decimalLeast = parseInt(leastCommon, 2);

  const result = decimalMost * decimalLeast

  console.log(result, 'result')

    return (
        <div>
            <div>gamma rate: {decimalMost}</div>
            <div>epsilon rate: {decimalLeast}</div>
            <div>result: {result}</div>
        </div>
    );
};

export default Task3;