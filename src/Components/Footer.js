import React from 'react';

const Footer = ({ data }) => {
  if (!data) return null;

  const { social } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {social && social.map(network => (
              <li key={network.name}>
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright {currentYear} Adam Kent</li>
            <li>Theme by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
