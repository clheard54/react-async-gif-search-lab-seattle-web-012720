import React from 'react';

export default class GifSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
                searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchGifs(this.state.searchTerm);
    }

    render(){
        return (
            <div>
                <label>What type of Gifs do you want?</label>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
                    <button type="submit">Search Gifs!</button>
                </form>
             </div>
        )
    }
}