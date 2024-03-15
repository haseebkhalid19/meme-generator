import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Edit } from './components';

const App = () => {
  return (
    <>
      <h1>Memes Generator</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
