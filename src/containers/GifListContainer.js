import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            gifs: []
        }
    }


    searchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=RSBRTYkgIuklRy19kvzSrjFtnp5DxA93&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.searchGifs()
      }


    render(){
        return(
        <div>
            <GifSearch searchGifs={this.searchGifs}/>
            <br></br>
            <GifList gifList={this.state.gifs}/>
        </div>
        )
    }
}
