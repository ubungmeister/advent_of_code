import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Tasks:</h1>
            <h2>Advent of Code 2022</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to="Task1">Task #1</Link>
                <Link to="Task2">Task #2</Link>
                <Link to="Task3">Task #3</Link>
                <Link to="Task6">Task #6</Link>
                <Link to="Task7">Task #7</Link>
                <Link to="Task9">Task #9</Link>
                <Link to="Task14">Task #14</Link>
            </div>
            <h2>Advent of Code 2023</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to="T1">Task #1</Link>
                <Link to="T2">Task #2</Link>
            </div>
            <h2>Advent of Code 2024</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to="2024_1">Task #1</Link>
                <Link to="2024_2">Task #2</Link>

             </div>
        </div>
    );
};

export default MainPage;