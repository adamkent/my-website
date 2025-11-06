import React from 'react';

const Resume = ({ data }) => {
  if (!data) return null;

  const { education, work, skills, skillmessage } = data;

  return (
    <section id="resume">
      {/* Education Section */}
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education && education.map(edu => (
                <div key={edu.school}>
                  <h3>{edu.school}</h3>
                  <p className="info">
                    {edu.degree} <span>&bull;</span>
                    <em className="date">{edu.graduated}</em>
                  </p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work && work.map(job => (
            <div key={job.company}>
              <h3>{job.company}</h3>
              <p className="info">
                {job.title}<span>&bull;</span> <em className="date">{job.years}</em>
              </p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          {skillmessage && <p>{skillmessage}</p>}

          <div className="bars">
            <ul className="skills">
              {skills && skills.map(skill => {
                const className = `bar-expand ${skill.name.toLowerCase().replace(/[\/\s]/g, '-')}`;
                return (
                  <li key={skill.name}>
                    <span style={{ width: skill.level }} className={className}></span>
                    <em>{skill.name}</em>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
