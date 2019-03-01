import React from "react";
// import github from "../api/github";
import axios from "axios";
import Error from "./Error";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ProfileList from "./ProfileList";

class App extends React.Component {
  state = {
    profiles: [],
    hasError: false,
    term: ""

  };

  onSearchSubmit = async term => {
    let word = term;
    console.log(word);
    let response;
    try {
      response = await axios.get(`https://api.github.com/users/${term}`, {
        params: {
          client_id: "c521f38a3fe316933134",
          client_secret: "969af97602977ba1ceafe7bad98d76911cc58dc1"
        }
      });
    } catch (err) {
      //this will show error message then it will disappear
      this.setState({ hasError: true, term: term });
      setTimeout(() => {
        this.setState({ hasError: false });
      }, 3000);
    }
    if (response !== undefined) {
      let userExist = this.state.profiles.findIndex(
        user => user.id === response.data.id
      );
      console.log(userExist);
      if (userExist === -1) {
        this.setState({ profiles: [...this.state.profiles, response.data] });
        this.setState({ hasError: false });
      }
    }
  };

  onButtonClick = id => {
    const removeFav = [...this.state.profiles].filter(
      el => el.id !== Number(id)
    );
    this.setState({
      profiles: removeFav
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <Header />
        {/* below will toggle if there is an error */}
        {this.state.hasError ? <Error term={this.state.term} /> : null}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ProfileList
          onButtonClick={this.onButtonClick}
          profiles={this.state.profiles}
        />
      </div>
    );
  }
}

export default App;
