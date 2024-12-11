import React from 'react';
import { Route } from 'react-router-dom';
import Task1 from '../pages/advent2024/Task1';
import Task2 from '../pages/advent2024/Task2';

const Advent2022Routes = [
  <Route key="task1" path="/2024_1" element={<Task1 />} />,
  <Route key="task2" path="/2024_2" element={<Task2 />} />,

];

export default Advent2022Routes;
