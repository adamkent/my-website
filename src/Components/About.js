import React from 'react';

const About = ({ data }) => {
  if (!data) return null;

  const { name, image, bio, address, phone, email, website } = data;
  const profilepic = `images/${image}`;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt={`${name} Profile`} />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span><br />
                <span>{address.city} {address.state}</span><br />
                <span>{phone}</span><br />
                <span>{email}</span><br />
                {website && <span><a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
