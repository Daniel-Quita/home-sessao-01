import React from 'react';
import { ActionButtons } from './ActionButtons';

interface HeroContentProps {
  onSimulateClick?: () => void;
  onClientClick?: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ 
  onSimulateClick, 
  onClientClick 
}) => {
  return (
    <div className="self-stretch flex min-w-60 min-h-[638px] w-[686px] flex-col items-stretch justify-center my-auto px-[30px] max-md:px-5">
      <h1 className="text-[rgba(5,48,54,1)] text-[64px] leading-[74px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
        <span style={{ fontWeight: 700, color: 'rgba(22,142,94,1)' }}>
          Mais possibilidades,
        </span>{" "}
        menos burocracia.
      </h1>
      
      <h2 className="text-[rgba(5,48,54,1)] text-[40px] font-bold mt-10 max-md:max-w-full">
        Parcelamento de Pix e boletos, crédito, seguro e muito mais. 
      </h2>
      
      <p className="text-[rgba(5,48,54,1)] text-2xl leading-[34px] mt-10 max-md:max-w-full">
        Proporcionamos{" "}
        <span style={{ fontWeight: 700 }}>liberdade financeira</span> real e
        acessível, oferecendo soluções simples que devolvem tranquilidade e
        possibilitam recomeços.
      </p>
      
      <ActionButtons 
        onSimulateClick={onSimulateClick}
        onClientClick={onClientClick}
      />
    </div>
  );
};
