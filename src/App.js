import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import References from './Components/References';
import Portfolio from './Components/Portfolio';

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Fetch resume data
    fetch('/resumeData.json')
      .then(response => response.json())
      .then(data => setResumeData(data))
      .catch(err => {
        console.error('Error loading resume data:', err);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <References data={resumeData.references} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
