import React from 'react';
import { Route } from 'react-router-dom';
import Task1 from '../pages/advent2024/Task1';

const Advent2022Routes = [
  <Route key="task1" path="/2024_1" element={<Task1 />} />,
];

export default Advent2022Routes;
