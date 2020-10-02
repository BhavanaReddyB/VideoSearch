import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    render(){
        return (
            // Adds gutter around the search bar on either side
            <div className="ui container"> 
                <SearchBar/>
            </div>
        );
    }
}

export default App;