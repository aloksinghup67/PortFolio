import React, { useEffect } from 'react';
import './App.css';

const StarryBackground = ({ children }) => {
  useEffect(() => {
    const starContainer = document.getElementById('starry-container');
    const starCount = 200;
    const starColors = ['white', 'orange', 'purple', 'lightblue'];

    const createStars = () => {
      if (starContainer) starContainer.innerHTML = '';
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2.5 + 0.5}px`;
        star.style.height = `${Math.random() * 2.5 + 0.5}px`;
        star.style.backgroundColor = starColors[Math.floor(Math.random() * starColors.length)];
        star.style.animationDuration = `${Math.random() * 1 + 1}s`;
        star.style.animationDelay = `${Math.random() * 1}s`;
        starContainer.appendChild(star);
      }
    };

    const createFallingStar = () => {
      const fallingStar = document.createElement('div');
      fallingStar.classList.add('falling-star');
      fallingStar.style.setProperty('--translate-x', `${starContainer.offsetWidth}px`);
      fallingStar.style.setProperty('--translate-y', `${starContainer.offsetHeight}px`);
      fallingStar.style.left = `0%`;
      fallingStar.style.top = `0%`;
      starContainer.appendChild(fallingStar);
      setTimeout(() => fallingStar.remove(), 4000);
    };

    createStars();
    setTimeout(() => createFallingStar(), 4000);

    const fallingStarInterval = setInterval(() => {
      if (Math.random() < 0.5) createFallingStar();
    }, Math.random() * 5000 + 4000);

    const handleResize = () => createStars();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(fallingStarInterval);
    };
  }, []);

  return (
    <div className="app-container">
      <div id="starry-container" className="starry-container" />
      <div className="content">{children}</div>
    </div>
  );
};

export default StarryBackground;
