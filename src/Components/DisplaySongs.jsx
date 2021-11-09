import React from 'react';
import './DisplaySongs.css'



function DisplaySongs (props){
    
    
  function renderSongsTable(){
        return props.songs.map((song,index)=> {
          const {id, title, artist,album, release_date, genre} = song
          return(
            
            <tr key='id'>
              <td>{id}</td>
              <td>{title}</td>
              <td>{artist}</td>
              <td>{album}</td>
              <td>{release_date}</td>
              <td>{genre}</td>
              <button className="button-two" onClick={()=>props.deleteSong(song.id)}>Delete Song</button>
            </tr>
          )
        });
      }
     
      const renderSongsHeader =()=> {
        let header = Object.keys(props.songs[0])
        return header.map((key,index) => {
          return <th key={index}>{key.toUpperCase()}</th>
        });
      }
    

      return (
        
          <div>
              <h1 id="title" >Songs</h1>
              <table id="table">
                  
                   {renderSongsHeader()}
                  
                  
                   {renderSongsTable()}
                  
              </table>
          </div>
      )

}

export default DisplaySongs;