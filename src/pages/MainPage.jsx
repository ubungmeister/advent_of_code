import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Tasks:</h1>
            <div>
            <Link  to="Task1" >Task #1</Link>
            <Link to="Task2" >Task #2</Link>
            </div>
          
        </div>
    );
};

export default MainPage;