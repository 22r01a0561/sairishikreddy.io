import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [name, setName] = useState('Hello, I am'); // Initialize name as an empty string
  const fullName = "Y . Sai Rishik Reddy"; // Removed extra spaces
  
  useEffect(() => {
    let index = 0, delay = 100; // Start from 0 to include the first character
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setName((prev) => prev + fullName[index]);
        index++;
        delay += 100; // Increase delay for each character
      } else {
        clearInterval(interval);
      }
    }, delay); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="font-Outfit text-5xl font-bold">{name}</h1>
          <p className="font-Outfit text-lg">I'm a full-stack developer based in New York City.</p>
          <button className="btn">Contact Me</button>
        </div>
      </section>
    </div>
  )
}

export default Hero
