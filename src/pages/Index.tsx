import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleSimulateClick = () => {
    // In a real application, this could open a modal or navigate to a simulation page
    console.log('Navigating to simulation...');
    // navigate('/simulate');
  };

  const handleClientClick = () => {
    // In a real application, this could navigate to login page
    console.log('Navigating to client area...');
    // navigate('/login');
  };

  const handleExploreClick = () => {
    // Smooth scroll to next section or navigate to explore page
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection 
        onSimulateClick={handleSimulateClick}
        onClientClick={handleClientClick}
        onExploreClick={handleExploreClick}
      />
      
      {/* Placeholder for future sections */}
      <section id="next-section" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Próxima Seção</h2>
          <p className="text-gray-600">Conteúdo adicional será adicionado aqui.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
