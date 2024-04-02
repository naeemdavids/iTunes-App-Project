import React, {useState, useEffect} from 'react';
import FavoritesBox from './FavoritesBox';
import { Link } from 'react-router-dom';

//This page is for the favorite tracks of the user. This component receives the stored data from the backend and displays it here.
function FavoritesPage() {
  const [favorites, setFavorites] = useState([]); //Data from the backend is stored in state.
  
  //Ensures that the Favorites page is always updated.
  useEffect(() => {
      getData()
  }, [favorites])

  //This function receives the data from the data stored in the backend with the fetch request and stores it in the state.
  const getData = () => {
      fetch('https://itunes-app-project-backend.onrender.com/favorites')
      .then(res => res.json())
      .then(data => {
          setFavorites(data);
      })
      .catch(err => {
        console.log(err);
      })
  }
 

    return (
    <div>
      <div className='d-flex resultsFoundBox m-2'>
        <Link to='/'>
            <button className='btn btn-lg btn-outline-light'>Back To List</button>
        </Link>
        <h2 className='text-warning border border-warning rounded m-1 p-1'>Favorites Found: {favorites.length}</h2>
      </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px'}}>
            {/*This map method maps through the array received from the state. In this case the favorites list*/}
            {
                favorites.map((favorites, id) => {
                    return <FavoritesBox favorites={favorites} key={id}/>
                })
            }
        </div>
    </div>
  )
}

export default FavoritesPage;
