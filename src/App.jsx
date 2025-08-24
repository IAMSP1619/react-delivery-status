import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InputPage from "./InputPage";
import OutputPage from "./OutputPage";
import './App.css'

const App = () => {
  const [rows, setRows] = useState([]);
  const [fixedOutputs, setFixedOutputs] = useState([]);
  const [selectedDate, setSelectedDate] = useState(""); // new state for date

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <InputPage 
            setRows={setRows} 
            setFixedOutputs={setFixedOutputs} 
            setSelectedDate={setSelectedDate} 
          />} 
      />
      <Route 
        path="/output" 
        element={
          <OutputPage 
            rows={rows} 
            fixedOutputs={fixedOutputs} 
            selectedDate={selectedDate} 
          />} 
      />
    </Routes>
  );
};

export default App;
