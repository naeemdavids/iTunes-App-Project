import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesDelete from './FavoritesDelete';

//This component gets the data for each item of the favorites array from the FavoritesPage component via props and displays each items unique data and information.
function FavoritesBox(props) {
    let getFavorites = props.favorites;
    console.log(getFavorites)



  return (
    <div className='bg-default text-primary my-3 p-3'
    style={{border: 'solid 1px #CCC', boxShadow: '7px 7px 5px grey'}}>
        {/*Data from props is displayed here in jsx*/}
        <div>
            <h4 className='text-white'>{getFavorites.trackName}</h4>
            <div><img src={getFavorites.artworkUrl100} alt='trackArtwork'/></div>
            <div className='text-white'>Author: {getFavorites.artistName}</div>
            <div className='text-white'>Price: {getFavorites.trackPrice} {getFavorites.currency}</div>
        </div>

        <div className='songButtons mt-2'>
            <div>
                <Link to='/favoritesPreview' state={getFavorites}>
                    <button className='btn btn-md btn-outline-light'>Preview</button>
                </Link>
            </div>

            <FavoritesDelete idDelete={getFavorites.idDelete}/>
        </div>

    </div>
  )
}

export default FavoritesBox;