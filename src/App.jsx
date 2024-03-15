import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [memes, setMemes] = useState([]);

  const getMemes = () => {

    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  const fetchApi = () => {
    fetch(`https://fakestoreapi.com/products?limit=6`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      });
  };

  useEffect(() => {
    getMemes();
    fetchApi()
  }, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
