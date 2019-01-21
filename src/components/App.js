import React from 'react';
import github from '../api/github';
import Header from './Header'
import SearchBar from './SearchBar';
import ProfileList from './ProfileList'
class App extends React.Component {
    
    state = {profiles: []};

    // onSearchSubmit = async (term) => {
        
    // const response = await github.get('/users/', {
    //     params: {query: term}
    // },'client_id=c521f38a3fe316933134&client_secret=969af97602977ba1ceafe7bad98d76911cc58dc1' );
    // this.setState({ profiles: response })
    // }

    onSearchSubmit = async (term) => {
        const response = await github.get(`/users/${term}?client_id=c521f38a3fe316933134&client_secret=969af97602977ba1ceafe7bad98d76911cc58dc1` );
        this.setState({ profiles: [...this.state.profiles, response.data]});
        console.log(this.state.profiles)
        }
    
    onButtonClick = (id) => {
        
        console.log(id)
    }
 
    render() {
    return (
        <div className="container" style={{ marginTop: '50px'}}>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ProfileList onButtonClick={this.onButtonClick} profiles={this.state.profiles} />
        </div>
        );
    }
}

export default App;