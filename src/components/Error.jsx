import React from 'react'

class Error extends React.Component {
    
    
    render() { 
        return (
            <div class="alert alert-dismissible alert-warning">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <h4 class="alert-heading">User <span style={{color: "blue"}}>{this.props.term}</span> Not Found</h4>
            <p class="mb-0">Please enter another username</p>
          </div> );

        
    }
}
 
export default Error;