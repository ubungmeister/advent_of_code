import React from 'react';

// count depth and position

const Task2 = () => {
const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2
`;
  const data = input.split('\n');

  let depth = 0;
  let position = 0;

  for (const el of data) {
    const [action, value] = el.split(' ');

    const intValue = Number(value);

    if (action === 'forward') {
      position = position + intValue;
    } else if (action === 'up') {
      depth = depth - intValue;
    } else if (action === 'down') {
      depth = depth + intValue;
    }
  }

    return (
        <div>
            <h1>Depth: {depth}</h1>
            <h1>Position: {position}</h1>
        </div>
    );
};

export default Task2;