import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import MainPage from './pages/MainPage';
import Task6 from './pages/Task6';
import Task7 from './pages/Task7';
import Task9 from './pages/Task9';
import Task14 from './pages/Task14';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7" element={<Task7 />} />
        <Route path="/task9" element={<Task9 />} />
        <Route path="/task14" element={<Task14 />} />
        <Route path="/" element={<MainPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
