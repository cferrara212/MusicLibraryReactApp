import React, { Component } from 'react';
import './SongForm.css'

class SongCreateForm extends Component {
    constructor(props){
        super(props);
            this.state= {
                        id:null,
                        title:'',
                        artist:'',
                        album:'',
                        release_date:null,
                        genre:''
            }
        }
            handleChange = (event) => {
                this.setState({
                    [event.target.name]:event.target.value
                });
            };

            handleSubmit = (event) => {
                event.preventDefault();
                this.props.createSong(this.state);
                alert('song created');
            };

            render(){
                return(
                    <div className="main">
                        
                      
                        <form onSubmit={(event)=> this.handleSubmit(event)}>
                        <div className="fieldOne">   
                                <label>Create Song</label>
                            
                                <input type="text" placeholder="Song Title" name="title" onChange={this.handleChange} value={this.state.title} />
                            
                                <input type="text" placeholder="Artist" name="artist" onChange={this.handleChange} value={this.state.artist} />   
                            
                                <input type="text" placeholder="Album" name="album" onChange={this.handleChange} value={this.state.album} />
                            {/* <label>Release Date</label>
                                <input type="text" name="release_date" onChange={this.handleChange} value={this.state.song.release_date} /> */}
                            
                                <input type="text" placeholder="Genre" name="genre" onChange={this.handleChange} value={this.state.genre} />
                     </div> 
                     <div className="button">          
                            <button type="submit" className="button" >Add Song</button>
                     </div>       
                        </form>
                    </div>
                );
            }
    }

export default SongCreateForm;