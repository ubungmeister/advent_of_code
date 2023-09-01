import React from 'react';

//task 6 
// iterate throught arra 80 times, each time decrese the number by 1, until it reaches 0
// then start from the beginning (from 6)+ add 8 to the array
//after 80 times count all the fish in the array

const Task6 = () => {
    const input='1,3,3,4,5,1,1,1,1,1,1,2,1,4,1,1,1,5,2,2,4,3,1,1,2,5,4,2,2,3,1,2,3,2,1,1,4,4,2,4,4,1,2,4,3,3,3,1,1,3,4,5,2,5,1,2,5,1,1,1,3,2,3,3,1,4,1,1,4,1,4,1,1,1,1,5,4,2,1,2,2,5,5,1,1,1,1,2,1,1,1,1,3,2,3,1,4,3,1,1,3,1,1,1,1,3,3,4,5,1,1,5,4,4,4,4,2,5,1,1,2,5,1,3,4,4,1,4,1,5,5,2,4,5,1,1,3,1,3,1,4,1,3,1,2,2,1,5,1,5,1,3,1,3,1,4,1,4,5,1,4,5,1,1,5,2,2,4,5,1,3,2,4,2,1,1,1,2,1,2,1,3,4,4,2,2,4,2,1,4,1,3,1,3,5,3,1,1,2,2,1,5,2,1,1,1,1,1,5,4,3,5,3,3,1,5,5,4,4,2,1,1,1,2,5,3,3,2,1,1,1,5,5,3,1,4,4,2,4,2,1,1,1,5,1,2,4,1,3,4,4,2,1,4,2,1,3,4,3,3,2,3,1,5,3,1,1,5,1,2,2,4,4,1,2,3,1,2,1,1,2,1,1,1,2,3,5,5,1,2,3,1,3,5,4,2,1,3,3,4'
    const arr = input.split(',').map(el => Number(el))

    for(let i=0; i<80; i++){
        let counter = 0 
        //each time decrease the number by 1, if reach 0 change to 6 and increas counter
        // after this iteration add 8 to the array, as many times as counter
        for(let j=0; j<arr.length; j++){
            if (arr[j] === 0){
                arr[j] = 6
                counter++
            }else{
                arr[j] = arr[j] - 1
            }
        }

        for(let k=0; k<counter; k++){
                arr.push(8)
            }

    console.log(`After ${i+1} day: ` ,arr)
    }
    
    const result = arr.length
    console.log(result, 'result')

    return (
        <div>
            <h1>result: {result}</h1>
        </div>
    );
};

export default Task6;