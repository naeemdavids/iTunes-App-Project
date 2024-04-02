import React from 'react';

//This component is for the delete button in the favorites list.
function FavoritesDelete(props) { 
    let idDelete = props.idDelete;
    console.log('idDel' +idDelete)

    //We use the DELETE method of the fetch request.
    const deleteButton = () => {
        fetch('https://itunes-app-project-backend.onrender.com/favorites/' + idDelete, {
            method: 'DELETE'
        });
    }
  
    return (
    <button className='btn btn-md btn-outline-warning' onClick={deleteButton}>Delete</button>
  )
}

export default FavoritesDelete;
