import React from 'react';

export default class GifList extends React.Component{
    renderGifs = () => {
        this.props.gifList.length = 3;
        return this.props.gifList.map(gif => {
                return (<li>
                    <img key={gif.url} src={gif.url} alt="gif"/>
                    </li>);
        })
    }
    
    render(){
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}
