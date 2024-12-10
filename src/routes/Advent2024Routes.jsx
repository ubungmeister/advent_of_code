import React from 'react';
import { Route } from 'react-router-dom';
import Task1 from '../pages/advent2022/Task1';
import Task2 from '../pages/advent2022/Task2';
import Task3 from '../pages/advent2022/Task3';
import Task6 from '../pages/advent2022/Task6';
import Task7 from '../pages/advent2022/Task7';
import Task9 from '../pages/advent2022/Task9';
import Task14 from '../pages/advent2022/Task14';

const Advent2022Routes = [
  <Route key="task1" path="/task1" element={<Task1 />} />,
  <Route key="task2" path="/task2" element={<Task2 />} />,
  <Route key="task3" path="/task3" element={<Task3 />} />,
  <Route key="task6" path="/task6" element={<Task6 />} />,
  <Route key="task7" path="/task7" element={<Task7 />} />,
  <Route key="task9" path="/task9" element={<Task9 />} />,
  <Route key="task14" path="/task14" element={<Task14 />} />
];

export default Advent2022Routes;
