import React from 'react';

interface ExploreLinkProps {
  onClick?: () => void;
}

export const ExploreLink: React.FC<ExploreLinkProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior - scroll down or navigate
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex w-full items-center gap-5 text-base text-black whitespace-nowrap text-center underline uppercase leading-[26px] justify-center flex-wrap mt-[60px] px-[30px] py-2.5 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <button 
        onClick={handleClick}
        className="flex items-center gap-5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
        aria-label="Explorar mais conteúdo"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/a9ff710bf38d48fc95ea4598b0c38a5e/6085f4e57d1c7f2a6ba3de3f39f1a88d9392a4fe?placeholderIfAbsent=true"
          className="aspect-[0.81] object-contain w-[21px] self-stretch shrink-0 my-auto"
          alt="Ícone de explorar"
        />
        <span className="self-stretch w-[89px] my-auto">
          explorar
        </span>
      </button>
    </div>
  );
};
