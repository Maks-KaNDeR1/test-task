import React, { useEffect } from 'react';
import './App.scss';
import { Todos } from './Components/Todos/Todos';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Buttons } from './Components/common/Buttons/Buttons';
import DropDown from './Components/common/DropDown/DropDown';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './store/store';
import { useDispatch } from 'react-redux';
import { initializeApp } from './store/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';



function App() {

  const isInitialized = useSelector<AppRootStateType>(state => state.app.initialized)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  if (!isInitialized) {
    return <Preloader />
  }

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



