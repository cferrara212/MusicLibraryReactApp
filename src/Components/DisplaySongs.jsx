import React from 'react';



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
              <button onClick={()=>props.deleteSong(song.id)}>Delete Song</button>
            </tr>
          )
        })
      }
     
      const renderSongsHeader =()=> {
        let header = Object.keys(props.songs[0])
        return header.map((key,index) => {
          return <th key={index}>{key.toUpperCase()}</th>
        });
      }
    

      return (
          <div>
              <table>
                  <th> {renderSongsHeader()} </th>
                  <tr>{renderSongsTable()}</tr>
              </table>
          </div>
      )
    // return (
    //         <div>
    //         <h1 id='title'>Songs Table</h1>
    //         <table id="songs">
    //             <tbody>
    //             <tr>{this.renderSongsHeader()}</tr>
    //                 {this.renderSongsTable()}
    //             </tbody>
    //         </table>
    //         </div>
      
    // );
}

export default DisplaySongs;