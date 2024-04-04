import React, { useState } from "react";

//This component is for the search box. Information that the user types here is sent to the App component.
function SearchBox(props) {
  const [term, setTerm] = useState(""); //Stores the term to be searched in the state.
  const [entity, setEntity] = useState("musicVideo"); //Stores the entity to be searched in the state.
  const [limit, setLimit] = useState(10); //Stores the limit to be searched in the state.

  //Function activates when the user presses the search button. It gets the information stored in the state and sends it to the searchSong() function in the App component.
  const searchHandler = (event) => {
    event.preventDefault();
    if (term === "" || entity === "") {
      window.alert("Please enter search Data");
      return;
    }

    const params = {
      term: term,
      entity: entity,
      limit: limit,
    };
    props.searchSong(params);
  };

  return (
    <form className="searchBox text-center" onSubmit={searchHandler}>
      <label className="text-white mx-2">Search: </label>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setTerm(e.target.value)}
      />

      {/*Dropdown options of the menu for the type of content*/}
      <label className="text-white mx-2">Content Type: </label>
      <select value={entity} onChange={(e) => setEntity(e.target.value)}>
        <option value="musicVideo">Music Video</option>
        <option value="musicTrack">Music Audio</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="audiobook">Audio Book</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvSeason">TV Show(Season)</option>
        <option value="tvEpisode">TV Show(Episode)</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
        <option value="	movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack">
          All
        </option>
      </select>

      <label className="text-white mx-2">Limit: </label>
      <input
        type="number"
        min={1}
        max={200}
        placeholder="10"
        onChange={(e) => setLimit(e.target.value)}
      />

      <input
        type="submit"
        value="Search"
        className="btn btn-outline-light m-1"
      />
    </form>
  );
}

export default SearchBox;
