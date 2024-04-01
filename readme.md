# iTunes Project App
## About this Project :

This README explains more about this iTunes App that I made. Its a simple search app where you can watch or listen to music from the Apple iTunes Store, in this case they are all previews and you can't actually purchase these items at the moment. This is for a project at HyperionDev.

## Table of Contents :

* How to Install
* How to Test
* How to Use
* Other


## How to Install :

Open the command terminal and cd to this folder. After that run **npm i** to install the node_modules for the backend, then cd to itunes-frontend folder and run **npm i** to install the dependencies for React. After that cd.. out of itunes-app-project folder and run **npm run dev**. This App uses concurrently so both the sever and frontend will start. Please use a Markdown viewer to see the images for more reference.

## How to Test :

You can test if the app is connected to the api by running **npm test** from the terminal.

## How to Use :

### Phase 1 Using the Search Bar

Search For the Music or Video you awant by typing it in the search bar. You can change the type of content you are looking for such as music, videos, podcasts and more by using the Content Type Dropdown, the default type is Music Video. You can also also set how much results you want by using the Limit bar, the default is 10. After that click Search and you'll get what you are looking for. Please note if nothing is found it will say Zero results found. 

![Phase 1](/readme%20Images/Screenshot%201.jpg)

### Phase 2 Track Preview or Add to Favorites

You can view the track preview by clicking on the Preview button or add it to your favorites list by clicking the Add To Favorites button.

![Phase 2](/readme%20Images/Screenshot%202.jpg)

### Phase 3 Viewing Your Favorites

You can view your favorite tracks by clicking the Favorites button over here. If you already added an item to the list it won't duplicate.

![Phase 3](/readme%20Images/Screenshot%203.jpg)

## Security :

This App uses Helmut as a means of security. This is placed in the backend of the App.

## Github Files Link :

https://github.com/naeemdavids/itunes-express-react-app-HyperiondevProject

## Credits :

* [Naeem Davids (Author of App)](https://github.com/naeemdavids)