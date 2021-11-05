import React from 'react';

const DisplaySongs = (props) =>{

    
    return (
      
            <div>
            <h1 id='title'>Songs Table</h1>
            <table id="songs">
                <tbody>
                <tr>{props.songHeader()}</tr>
                    {props.songTable()}
                </tbody>
            </table>
            </div>
      
    );
}

export default DisplaySongs;