import { useState, useEffect } from 'react';
import pfp from './assets/pfp.jpg';
import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import leetcode from './assets/leetcode.png';
import codechef from './assets/codechef.jpg';
import hackerrank from './assets/hackerrank.jpg';
import codeforces from './assets/codeforces.png';
import gcskill from './assets/gcskill.jpg';
import github from './assets/github.png';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './App.css';
import { sendContactEmail } from './services/emailService';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailStatus, setEmailStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailStatus({ loading: true, success: null, error: null });

    const result = await sendContactEmail(formData);

    if (result.success) {
      setFormData({ name: '', email: '', message: '' });
      setEmailStatus({ loading: false, success: result.message, error: null });
    } else {
      setEmailStatus({ loading: false, success: null, error: result.message });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [currentWord, setCurrentWord] = useState('');

  
  const projects = [
    {
      title: 'Sun-Suna-Music',
      description: 'An add-free music player with playlist and mp3 downloader',
      tech: ['Apis', 'Express-Node.js'],
      image: project1,
      link: 'https://sun-suna-music.onrender.com'
    },
    {
      title: 'Movie Tracker',
      description: 'Search and store movies in watchlist',
      tech: ['Node.js', 'Tmdb api', 'React', 'Local Storage'],
      image: project2,
      link: 'https://reactmoviedb-delta.vercel.app/'
    },
    {
      title: 'Stair Climb Quiz Game',
      description: 'Simple quiz Game with little animation',
      tech: ['Node.js', 'Trivia Api', 'Vanilla Js'],
      image: project3,
      link: 'https://staircase-quiz-game.onrender.com/'
    }
  ];
  const codingProfiles = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Aloksingh02',
      image: leetcode
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/aloksinghkh43',
      image: hackerrank
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aloksinghup67',
      image: github
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/aloksingh43',
      image: codechef
    },
    {
      name: 'CodeForces',
      url: 'https://codeforces.com/profile/aloksinghup67',
      image: codeforces
    },
    {
      name: 'Google Cloud',
      url: 'https://www.cloudskillsboost.google/public_profiles/525f02ac-2fb1-4c8a-8bab-8b8a0fa1d52e',
      image: gcskill
    }
  ];
  const handleType = (count) => {
    const words = ['Developer', 'Designer', 'Coder'];
    setCurrentWord(words[count % words.length]);
  };

  const getColor = () => {
    switch (currentWord) {
      case 'Developer': return '#2E86C1';
      case 'Designer': return '#E74C3C';
      case 'Coder': return '#27AE60';
      default: return '#2E86C1';
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);


useEffect(() => {
  const handleClickOutside = (e) => {
    if (isMenuOpen && !e.target.closest('.nav-container')) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isMenuOpen])

  return (
    <div className="container">
      <div className="nav-container">
  <button 
    className="hamburger" 
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-label="Toggle navigation"
  >
    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
  </button>

  {isMenuOpen && (
    <nav className="dropdown-menu">
      <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a> 
      <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
      
      <a href="#coding profiles" onClick={() => setIsMenuOpen(false)}>Coding Profiles</a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      <Link to="/unprofessional" onClick={() => setIsMenuOpen(false)}>
        Unprofessional Me
      </Link>
    </nav>
  )}
</div>
      <section id="home" className="profile-section">
        <div className="profile-content">
          <div className="image-wrapper">
            <img src={pfp} className="profile-image" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>Alok Singh</h1>

           
      <section className="typewriter-section">
        <h2>
          I'm a{' '}
          <span style={{ color: getColor() }}>
            <Typewriter
              words={['Developer', 'Designer', 'Coder']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleType}
              onType={handleType}
            />
          </span>
        </h2>
      </section>
            <div className="about-me">
              <p>
                👨💻 Full-stack developer specializing in modern web technologies. 
                Proficient in Java and passionate about problem-solving through DSA. 
                Currently exploring React & Node.js ecosystems,
                and experimenting with AI tools. 
                <br/><br/>
                🎵 Music enthusiast and tech explorer who believes in the power of 
                clean code and innovative solutions. Always curious about emerging 
                technologies and their practical applications in real-world scenarios.
                <br/><br/>
                🚀 Continuously learning, 
                And driven to improve and excel.
              </p>
            </div>
            <div className="education-section">
              <div className="education-item"><a href='https://www.vbspu.ac.in/'>VBSPU : BCA 2021 - 2024</a></div>
              <div className="education-item"><a href='https://www.mmmut.ac.in/'>MMMUT : MCA 2024 - 2026</a></div>
            </div>
            
          </div>
        </div>
      </section>

    

    
      <section id="skills" className="skills-section">
        <h3>My Skills</h3>
        <div className="skills-grid">
          {['Java', 'C++', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'APIs', 'C'].map((skill) => (
            <div key={skill} className="skill-item">{skill}</div>
          ))}
        </div>
      </section>

      
      <section id="projects" className="projects-section">
        <h3>My Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <a 
              href={project.link} 
              className="project-card" 
              key={project.title}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div 
                className="project-image" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="image-overlay"></div>
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.join(' • ')}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section id="coding profiles" className="platforms-section">
  <h3>Coding Profiles</h3>
  <div className="platforms-grid">
    {codingProfiles.map((platform) => (
      <a
        href={platform.url}
        className="platform-link"
        key={platform.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="platform-item">
          <img src={platform.image} alt={platform.name} className="platform-image" />
        </div>
      </a>
    ))}
  </div>
</section>
      <h1>Find me</h1>
      <div id="contact" className="social-links">
              <a href="https://www.instagram.com/aloksinghrajput08" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/alok-singh-b01966265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:aloksinghkh43@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <section className="contact-section">
      <h3>Contact Me</h3><br/>
      <form onSubmit={handleSubmit} className="contact-form">
  <div className="form-group">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
      rows="5"
    ></textarea>
  </div>

  <button type="submit" disabled={emailStatus.loading}>
    {emailStatus.loading ? 'Sending...' : 'Send Message'}
  </button>
  
  {emailStatus.success && (
    <div className="alert success">{emailStatus.success}</div>
  )}
  {emailStatus.error && (
    <div className="alert error">{emailStatus.error}</div>
  )}
</form>
    </section>
    </div>
  );
}

export default App;
