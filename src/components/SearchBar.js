import React from 'react';

 
export default ;
class SearchBar extends React.Component {

    state = { term: '' }; //#endregion


    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
        this.setState({ term: '' })
    };

    render() {
        return (<div className="container">

            <form onSubmit={this.onFormSubmit} className="form-group" >
                <div className="row">

                    <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Type in a username below to get github user details</label>
                    <input className="form-control form-control-lg" type="text" placeholder="Enter your search here" id="inputLarge" value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })} />

                    <button type="submit" className="btn btn-primary btn-block" >Submit</button>

                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;