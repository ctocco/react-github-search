import React from "react";
import "../styles/ProfileList.css";

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    this.props.onButtonClick(event.target.id);
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
  };

  render() {
    let profiles = this.props.profiles;
    return (
      <div>
        {profiles.map(profile => (
          <div key={profile.id} className="card mb-3 mt-3">
            <h1 className="card-header">Username: {profile.login}</h1>
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <h6 className="card-subtitle text-muted">{profile.location}</h6>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    id={profile.id}
                    style={{ height: "100%", width: "100%" }}
                    src={profile["avatar_url"]}
                    alt="user"
                  />
                </div>

                <div className="col-sm-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item remove bold">
                      {" "}
                      {profile.company}
                    </li>
                    <li className="list-group-item remove">
                      <i className="fas fa-compress-arrows-alt text-info" />{" "}
                      Followers: {profile.followers}
                    </li>
                    <li className="list-group-item remove">
                      <i className="fas fa-expand-arrows-alt text-info" />{" "}
                      Following: {profile.following}
                    </li>
                    <li className="list-group-item remove">
                      Public Repos: {profile["public_repos"]}
                    </li>
                    <li className="list-group-item remove">
                      Blog: {profile.blog ? profile.blog : "-"}
                    </li>
                    <li className="list-group-item remove">
                      {profile.email ? profile.email : "-"}
                    </li>
                  </ul>
                </div>
                <div className="container col-sm-4 pr-5">
                  <blockquote className="blockquote">
                    <p className="mb-0">{profile.bio ? profile.bio : "-"}</p>
                  </blockquote>
                  <div className="d-flex flex-column-reverse align-items-end justify-content-between button">
                    <button
                      className="btn btn-info btn-md mt-2"
                      href="#"
                      role="button"
                      id={profile.id}
                      onClick={this.handleClick}
                    >
                      Remove User
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted block mt-3">
              Profile created on {profile.created_at}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// export default ;
// class ProfileList extends React.Component {
//     state = {}

//     render() {(
//         {
//        })}

//     )}

// // return <div>{image}</div>

// }

export default ProfileList;
