import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs'
import SongCreateForm from './Components/SongForm';
import Search from './Components/Search';

class App extends Component {
 constructor(props){
   super(props);
   this.state={
     songs:[
       {
         id:null,
         title:'',
         artist:'',
         album:'',
         release_date:null,
         genre:''
       }
     ],
   };
 }
  
 componentDidMount(){
   this.getSongs();
 }

 getSongs = async () => {
   try{
   let response = await axios.get('http://127.0.0.1:8000/music/');
   console.log(response.data)
   this.setState({songs: response.data})
   }
   catch (ex){
     console.log('error in API call')
   }
 }


searchSong= (query) => {
  let filteredSongs = this.state.songs.filter(function(song) {
      if(song.title.includes(query) || song.artist.includes(query) || song.album.includes(query)
      || song.genre.includes(query)){
          return true;
      } else {
          return false;
      }
  });
      
 this.setState({songs:filteredSongs})
}

 deleteSong = async (id) => {

    await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    this.getSongs();
 }

 createSong = async (newSong) =>{
   console.log('from createSong', newSong)
   await axios.post('http://127.0.0.1:8000/music/', newSong);
   this.getSongs();
 }
 
 render() {
  console.log('state of songs', this.state.songs);
  return (
    
    <div className="App" id="page">
      <Search searchSong={this.searchSong} />
      <DisplaySongs songs={this.state.songs} deleteSong={this.deleteSong} />
      <SongCreateForm createSong={this.createSong} />
    </div>
  );
}

}




export default App;
