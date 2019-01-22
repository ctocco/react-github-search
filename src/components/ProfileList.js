import React from 'react';
import '../styles/ProfileList.css' 

const ProfileList = props => {

    // const image = props.profiles["avatar_url"]
    

    console.log(props.profiles)
    

    const image = props.profiles.map( (profile) => {
       
     return <div key={profile.id} className="card mb-3 mt-3">
                <h1 className="card-header">Username: {profile.login}</h1>
                <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <h6 className="card-subtitle text-muted">{profile.location}</h6>
            </div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-4"><img id={profile.id} style={{height: "100%", width: "100%"}} src={profile["avatar_url"]} alt="user" /></div>
                
                <div className="col-sm-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item remove bold">{" "}{profile.company}</li>
                            <li className="list-group-item remove"><i class="fas fa-compress-arrows-alt text-info"></i>{" "}Followers: {" "}{profile.followers}</li>
                            <li className="list-group-item remove"><i class="fas fa-expand-arrows-alt text-info"></i>{" "}Following: {' '}{profile.following}</li>
                            <li className="list-group-item remove">Public Repos: {' '}{profile["public_repos"]}</li>
                            <li className="list-group-item remove">Blog: {" "}{profile.blog}</li>
                            <li className="list-group-item remove">{profile.email}</li>
                        </ul>
                </div>
                <div className="container col-sm-4 pr-5">
                <blockquote class="blockquote">
                <p class="mb-0">{profile.bio}</p>
                <footer class="blockquote-footer">{profile.name}<br></br><cite title="Source Title">{profile.login}</cite></footer>
                </blockquote>
                    <div className="d-flex flex-column-reverse align-items-end justify-content-between button">
                        <a className="btn btn-info btn-md mt-2" href="#" role="button" onClick={()=> props.onButtonClick(profile)}>Remove User</a>
                       
                
                    </div>
                </div>
            </div>
        </div>
                <div className="card-footer text-muted block mt-3">Profile created on 
            {' '}{profile.created_at}
  </div>
    </div>
    });
    
return <div>{image}</div>

}


export default ProfileList;