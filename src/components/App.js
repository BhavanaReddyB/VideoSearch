import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../components/apis/youtube';

class App extends React.Component{
    onTermSubmit = term => {
        youtube.get("/search",{
            params:{q: term}
        });
    }

    render(){
        return (
            // Adds gutter around the search bar on either side
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;