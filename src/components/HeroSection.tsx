import React from 'react';
import { HeroContent } from './HeroContent';
import { ExploreLink } from './ExploreLink';

interface HeroSectionProps {
  onSimulateClick?: () => void;
  onClientClick?: () => void;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onSimulateClick, 
  onClientClick, 
  onExploreClick 
}) => {
  return (
    <main className="flex flex-col relative min-h-[852px] overflow-hidden items-stretch font-normal justify-center px-[100px] py-[50px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/a9ff710bf38d48fc95ea4598b0c38a5e/abbb2e11f963b67e6cb22867ee6dbdcc325fb580?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Imagem de fundo representando liberdade financeira"
      />
      
      <section className="relative flex w-full items-center gap-[30px] max-md:max-w-full">
        <HeroContent 
          onSimulateClick={onSimulateClick}
          onClientClick={onClientClick}
        />
      </section>
      
      <ExploreLink onClick={onExploreClick} />
    </main>
  );
};
