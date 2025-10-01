import React from 'react';

interface ActionButtonsProps {
  onSimulateClick?: () => void;
  onClientClick?: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onSimulateClick, 
  onClientClick 
}) => {
  const handleSimulateClick = () => {
    if (onSimulateClick) {
      onSimulateClick();
    } else {
      // Default behavior - could open a simulation modal or navigate
      console.log('Simular parcelamento clicked');
    }
  };

  const handleClientClick = () => {
    if (onClientClick) {
      onClientClick();
    } else {
      // Default behavior - could navigate to login page
      console.log('Já sou cliente clicked');
    }
  };

  return (
    <div className="flex w-[460px] max-w-full items-center gap-[30px] text-base text-center uppercase justify-center mt-10">
      <button
        onClick={handleSimulateClick}
        className="bg-[rgba(22,142,94,1)] self-stretch flex min-w-60 items-center gap-2.5 text-[rgba(250,247,235,1)] justify-center my-auto px-[30px] py-2.5 rounded-[50px] max-md:px-5 hover:bg-[rgba(22,142,94,0.9)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(22,142,94,1)] focus:ring-offset-2"
        aria-label="Simular parcelamento de pagamentos"
      >
        <span className="self-stretch my-auto">
          Simular parcelamento
        </span>
      </button>
      <button
        onClick={handleClientClick}
        className="bg-[rgba(236,233,192,1)] self-stretch flex items-center gap-2.5 text-[rgba(22,142,94,1)] justify-center my-auto px-[30px] py-2.5 rounded-[50px] max-md:px-5 hover:bg-[rgba(236,233,192,0.8)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(22,142,94,1)] focus:ring-offset-2"
        aria-label="Acessar área do cliente"
      >
        <span className="self-stretch my-auto">
          JÁ sou cliente
        </span>
      </button>
    </div>
  );
};
