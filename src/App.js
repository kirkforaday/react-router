import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/pages/';
import LevelList from './Components/LeveList';
import Navbar from './Components/layouts/Navbar';
import LevelData from './Components/LevelData';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
   <Route exact path="/" component={Home} />
   <Route path="/guides" component={LevelList} />
   <Route path="/level/data/:id" children={<LevelData/>} />
   </Switch>
   </>
  );
}

export default App;