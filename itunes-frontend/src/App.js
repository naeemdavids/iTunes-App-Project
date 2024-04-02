import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Home from './components/Home';
import SongPreview from './components/SongPreview';
import FavoritesPage from './components/FavoritesPage';
import FavoritesPreview from './components/FavoritesPreview';

function App() {
  const [songs, setSongs] = useState([]); //Stores the results from the api in the state.
  const [count, setCount] = useState(0); //State for How much items where found.
  const [update, setUpdate] = useState([]); //State for re-rendering the Songs List after the user puts something in the search bar and presses enter. 


  //Makes sure that the data is always updated in the homepage/searchpage.
  useEffect(() => {
    getData();
  }, [update]);
  
  //Function for getting the data from the backend and storing it in the state.
  const getData = () => {
    fetch('https://itunes-app-project-backend.onrender.com/').then(res => res.json()).then(data => {
      
      setCount(data.resultCount);
      setSongs(data.results);
      console.log(data);
      console.log(data.results);
      console.log(data)
    }).catch(err => {
      console.log(err);
    })
  }


  //Function that gets the information typed in the search bar and sends it to the backend when the user presses the search button.
  const searchSong = async (params) => {
    let { term, entity, limit } = params;
    let newSearch = { term, entity, limit }
  
    try {
      const sendData = await fetch('https://itunes-app-project-backend.onrender.com/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSearch),
      });
  
      // If the Post to the backend is successfull, this code tells the state to re-render again.
      if (sendData.ok) {
        console.log('Data sent successfully');

        setTimeout(()=>{
          setUpdate(newSearch)
        },2000)
      } else {
        console.log('Failed to send data:', sendData.statusText);
      }
    } catch (err) {
      console.log('Error:', err.message);
    }
  }
  

  return (
    <div >
      <div className="App container bg-dark bg-opacity-75">
        <Header/>
        <SearchBox searchSong={searchSong}/>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home songs={songs} count={count}/>} />
            <Route path='/preview' element={<SongPreview />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/favoritesPreview' element={<FavoritesPreview />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
