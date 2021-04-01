import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Album from './Components/Album'
import Albums from './Components/Albums';
class App extends Component {
  constructor(props) {
		super(props)

	// this.state = {
  //     albums: '',
  //     errorMsg: ''
	// 	}
    this.state = {
      albums: [
        {id: 1, artist: "Vijay T", album_title: "Master", album_cover: "Music Anirudh R", songs: "Sound Track1"},
        {id: 2, artist: "Naveen Polishetty", album_title: "Jathirathnalu", album_cover: "Music Radhan", songs: "Sound Track2"},
        {id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3"},
      ],
      errorMsg: ''
    }

	}
  render() {
    return (
      <div className="App">
        <Album artist={this.state.artist} album_title={this.state.album_title} album_cover={this.state.album_cover}/>
        <Albums albums={this.state.albums}/>
      </div>
    )
  }
}

export default App

