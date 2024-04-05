import { HomePage } from './Components/Home/HomePage';
import { Fragment } from 'react';
import NavbarBoots from './Components/Navabar/NavbarBoots';
// import './App.css';

function App() {
  return (
    <Fragment>
      <NavbarBoots />
      <HomePage />
    </Fragment>
  );
}

export default App;