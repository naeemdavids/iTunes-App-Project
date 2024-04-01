import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//This is the preview component for the users favorites items. The data of the chosen favorite item is passed here via props and displayed here once again.
function FavoritesPreview(props) {
    const location = useLocation();
    const getFavorites = location.state;
    const navigate = useNavigate();

    return (
    <div className='w-75 mx-auto mt-3 text-center border border-light rounded'>
        <h2 className='text-white m-2' >{getFavorites.artistName}</h2>
        <div>
            <img className='border border-light rounded' src={getFavorites.artworkUrl100} alt='artwork'/>
            <div className='text-white m-2'>Track Name: {getFavorites.trackName}</div>
        </div>
        
        <div className='border border-light rounded'>
            {/*This code is for the audio and video that is displayed in the media window of the preview function/component*/}
            {
                getFavorites.kind==='getFavorites'?(
                    <audio controls='controls' autoPlay='autoPlay'>
                        <source src={getFavorites.previewUrl} type='audio/mp4'/>
                    </audio>
                ):(
                    <video controls='controls' width={600}  autoPlay='autoPlay'>
                        <source src={getFavorites.previewUrl} type='video/mp4'/>
                        Your browser does not support this video.
                    </video>
                )
            }
        </div>

        <div>
            <button className='btn btn-outline-light m-2'
            onClick={() => navigate(-1)}
            >Back to Favorites list</button>
        </div>

    </div>
  )
}

export default FavoritesPreview;