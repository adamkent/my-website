import React from 'react';

const References = ({ data }) => {
  if (!data) return null;

  const { references } = data;

  return (
    <section id="references">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>References</span></h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              {references && references.map(ref => (
                <li key={ref.user}>
                  <blockquote>
                    <p>{ref.text}</p>
                    <cite>{ref.user}</cite>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
