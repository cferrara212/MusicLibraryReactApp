import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs'

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
         release_date:null
       }
     ],
   };
 }
  
 componentDidMount(){
   this.getSongs();
 }

 getSongs = async () => {
   let response = await axios.get('http://127.0.0.1:8000/music/');
   console.log(response.data)
   this.setState({songs: response.data})
   
 }

 renderSongsTable = () => {
   return this.state.songs.map((song,index)=> {
     const {id, title, artist,album, release_date} = song
     return(
       <tr key='id'>
         <td>{id}</td>
         <td>{title}</td>
         <td>{artist}</td>
         <td>{album}</td>
         <td>{release_date}</td>
       </tr>
     )
   })
 }

 renderSongsHeader = () => {
   let header = Object.keys(this.state.songs[0])
   return header.map((key,index) => {
     return <th key={index}>{key.toUpperCase()}</th>
   })
 }
 
 render() {
  console.log('state of songs', this.state.songs)
  return (
    
    <div className="App">
      <DisplaySongs songHeader={this.renderSongsHeader} songTable={this.renderSongsTable} />
    </div>
  );
}

}




export default App;
