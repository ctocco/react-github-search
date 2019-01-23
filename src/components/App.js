import React from 'react';
import github from '../api/github';
import Header from './Header'
import SearchBar from './SearchBar';
import ProfileList from './ProfileList'
class App extends React.Component {

    state = { profiles: [],
    // turnModalOn: null,
    // modalMessage null, 

};

    onSearchSubmit = async (term) => {
        const response = await github.get(`/users/${term}?client_id=c521f38a3fe316933134&client_secret=969af97602977ba1ceafe7bad98d76911cc58dc1`);
        this.setState({ profiles: [...this.state.profiles, response.data] });
        // put your if statements here 
        // set boolean to true or false 

    }

    onButtonClick = (id) => {
        const removeFav = [...this.state.profiles].filter((el) => el.id !== Number(id))
        this.setState({
            profiles: removeFav,
        })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '50px' }}>
                <Header />
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ProfileList onButtonClick={this.onButtonClick} profiles={this.state.profiles} />
            </div>
        );
    }
}

export default App;

