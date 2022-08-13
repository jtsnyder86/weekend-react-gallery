import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';


function App() {

  let [galleryList, setGalleryList] = useState ([]);

  const getGallery = () => {
    console.log('getting gallery');

    axios.get('/gallery')
      .then(response => {
        console.log('response is,', response.data);
        setGalleryList(response.data)
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect( () => {
    getGallery()
  },[]);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryItem />
      </div>
    );
}

export default App;
