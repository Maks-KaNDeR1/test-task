import React from 'react';
import './App.scss';
import { Todos } from './Components/Todos/Todos';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Buttons } from './Components/common/Buttons/Buttons';
import DropDown from './Components/common/DropDown/DropDown';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Todos />} />
        <Route path={'/todos'} element={<Todos />} />
        <Route path={'/button'} element={<Buttons />} />
        <Route path={'/dropdown'} element={<DropDown />} />
      </Routes>
    </div>
  );
}

export default App;



