import React from "react"
import FunctionalComp from "./components/FunctionalComp";
import {ClassComp,ClassComp1} from "./components/ClassComp";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h1>Hello Welcome to React JS</h1>
    <h1>This Lesson about Understanding Basics of Components</h1>
    <FunctionalComp></FunctionalComp>
    <ClassComp></ClassComp>
    <ClassComp1></ClassComp1>
    </div>
  );
}

export default App;
