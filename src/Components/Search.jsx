import React, { Component } from 'react';
import './Search.css'


class Search extends Component {
    constructor(props){
        super(props);
            this.state= {
                 search:''
            }
        }
            handleChange = (event) => {
                this.setState({
                    [event.target.name]:event.target.value
                });
            };

            handleSubmit = (event) => {
                event.preventDefault();
                this.props.searchSong(this.state.search);
            };

            render(){
                return(
                    <div className="main-search">
                        <br/>
                        <form onSubmit={(event)=> this.handleSubmit(event)}>
                                <input type="text" placeholder="Search for title, artist, album, or genre here" name="search" onChange={this.handleChange} value={this.state.search} />
                            <button type="submit" className="button-one" >Search Songs</button>
                        </form>
                    </div>
                );
            }
    }



export default Search;