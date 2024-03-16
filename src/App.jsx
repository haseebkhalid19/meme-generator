import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Edit } from './components';

const App = () => {
  return (
    <>
      <h1 className='text-center my-5 text-white'>Memes Generator</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
