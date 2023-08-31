import React from 'react';

const Task9 = () => {

const input = `2199943210
3987894921
9856789892
8767896789
9899965678`

const inputs = input.split('\n')


console.log(inputs.length, 'inputs')

let counter = 0 

  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs[i].length; j++) {

      let point = inputs[i][j];

      let isLower = true; // Assume it's a lower point

      // vertically up
      if (i - 1 >= 0 && inputs[i - 1][j] < point) {
        isLower = false;
      }
      // vertically down
      if (i + 1 < inputs.length && inputs[i + 1][j] < point) {
        isLower = false;
      }
      // horizontally left
      if (j - 1 >= 0 && inputs[i][j - 1] < point) {
        isLower = false;
      }
      // horizontally right
      if (j + 1 < inputs[i].length && inputs[i][j + 1] < point) {
        isLower = false;
      }

      // If no adjacent point is higher, increment the counter
      if (isLower) {
        counter = counter + Number(point) + 1;
        // console.log('lower point:', point);
      }
  }

}
  console.log(counter, 'counter')

    return (
        <div>
            
        </div>
    );
}

export default Task9;