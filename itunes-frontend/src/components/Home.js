import React, { useEffect, useState } from 'react';
import Song from './Song';
import {Link} from 'react-router-dom';

//This is the Home page where the users search results are displayed. The search results are sent to this component via props to display here. Here the search results are displayed in the own blocks/cards via the .map method.
function Home(props) {
    const [musicList, setMusicList] = useState(props.songs);
    let count = props.count;

    useEffect(() => {
        setMusicList(props.songs);
    }, [props.songs])
  
    return (
    <div>
        <div className='d-flex resultsFoundBox m-2'>
            <h2 className='text-white border border-light rounded m-1 p-1'>Results Found: {count}</h2>
            <Link to='/favorites'>
                <button className='btn btn-lg btn-outline-warning'>Favorites</button>
            </Link>
        </div>

        <div style={{display: 'grid', gridGap: '20px', gridTemplateColumns: '49% 49%'}}>
            {/*This map method maps through the array received from props and stored in the state. In this case the musicList*/}
            {
                musicList.map((song, id) => {
                    return <Song song={song} key={id}/>
                })
            }
        </div>
        
    </div>
  )
}

export default Home;