import React from 'react';
import { Route } from 'react-router-dom';
import T1 from '../pages/advent2023/T1';
import T2 from '../pages/advent2023/T2';

const Advent2023Routes = [
    <Route  key="task1" path="/T1" element={<T1 />} />,
    <Route  key="task2" path="/T2" element={<T2 />} />
]
 

export default Advent2023Routes;
