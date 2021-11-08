import React, { Component } from 'react';

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
                    <div>
                        <br/>
                        <h1> Create A Song </h1>
                        <form onSubmit={(event)=> this.handleSubmit(event)}>
                            <label>Song Title</label>
                                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                            <label>Artist</label>
                                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
                             <br />   
                            <label>Album</label>
                                <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
                            {/* <label>Release Date</label>
                                <input type="text" name="release_date" onChange={this.handleChange} value={this.state.song.release_date} /> */}
                            <label>Genre</label>
                                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
                            <button type="submit" >Add Song</button>
                        </form>
                    </div>
                );
            }
    }

export default SongCreateForm;