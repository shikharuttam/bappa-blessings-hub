import { useEffect, useRef } from 'react';

const FloatingPetals = () => {
  const petalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const petalsContainer = petalsRef.current;
    if (!petalsContainer) return;

    const petalCount = 60;
    
    // Clear existing petals
    petalsContainer.innerHTML = '';

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      
      const startX = Math.random() * 100; // vw
      const drift = (Math.random() * 2 - 1) * 40; // px
      const delay = Math.random() * -10; // negative for instant spread
      const duration = 7 + Math.random() * 6; // seconds
      
      petal.style.left = startX + 'vw';
      petal.style.setProperty('--x', drift + 'px');
      petal.style.animationDuration = duration + 's';
      petal.style.animationDelay = delay + 's';
      petal.style.transform = `translate3d(0, -20px, 0) rotate(${Math.random() * 360}deg)`;
      
      petalsContainer.appendChild(petal);
    }
  }, []);

  return <div ref={petalsRef} className="floating-petals" aria-hidden="true" />;
};

export default FloatingPetals;