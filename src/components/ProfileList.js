import React from 'react';

const ProfileList = props => {

    // const image = props.profiles["avatar_url"]
    

    console.log(props.profiles)
    const image = props.profiles.map( (profile) => {
       
     return <div key={profile.id} className="card mb-3 mt-3">
                <h1 className="card-header">Username: {profile.login}</h1>
                <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            </div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-4"><img id={profile.id} style={{height: "100%", width: "100%"}} src={profile["avatar_url"]} alt="user" /></div>
                
                <div className="col-sm-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item remove"></li>
                            <li className="list-group-item remove"></li>
                            <li className="list-group-item remove"></li>
                            <li className="list-group-item remove"></li>
                            <li className="list-group-item remove"></li>
                            <li className="list-group-item remove"></li>
                        </ul>
                </div>
                <div className="col-sm-4 pr-5">
                <a className="btn btn-info btn-lg" href="#" role="button" onClick={()=> props.onButtonClick(profile)}>Remove User</a>
                </div>
            </div>
        </div>
            <div className="card-footer text-muted block mt-3">Profile created on 
            {' '}{profile.created_at}
  </div>
    </div>
    });
    
return <div>{image}</div>;

}


export default ProfileList;