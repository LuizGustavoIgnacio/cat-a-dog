import React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Procurar"
        name="search"
        className="min-h-[60px] rounded-lg mb-[50px] placeholder:font-bold bg-black/50 w-full"
      />
    </div>
  );
};
