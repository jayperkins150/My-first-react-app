import React from 'react';

function ProfileCard({image, name, jobTitle, bio}) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <div className="profile-info">
                <h2 className="name">{name}</h2>
                <h3 className="job-title">{jobTitle}</h3>
                <p className="bio">{bio}</p>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default ProfileCard;

