import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

//This component gets the data for each item of the array via props and displays each items unique data and information.
function Song(props) {
    const song = props.song;
  
    return (
    <div className='bg-default text-primary my-3 p-3 rounded'
    style={{border: 'solid 1px #CCC', boxShadow: '7px 7px 5px grey'}}>

        <div>
            {/*JSX for the cards that display the data of the tracks*/}
            <h4 className='text-white'>{song?.trackName}</h4>
            <div className='mx-1'><img src={song?.artworkUrl100} alt='trackArtwork' width='50%'/></div>
            <div className='text-white'>Author: {song?.artistName}</div>
            <div className='text-white'>Price: {song?.trackPrice} {song?.currency}</div>
            
            <div className='songButtons mt-2'>
                <div>
                    <Link to='/preview' state={song}>
                        <button className='btn btn-md btn-outline-light'>Preview</button>
                    </Link>
                </div>
                <FavoriteButton trackName={song?.trackName} artistName={song?.artistName} trackPrice={song?.trackPrice} currency={song?.currency} artworkUrl100={song?.artworkUrl100} previewUrl={song?.previewUrl}/>
            </div>

        </div>
    </div>
  )
}

export default Song;