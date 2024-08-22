"use client";

import { AiOutlineSearch } from "react-icons/ai";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setCountry }: InputProps) => {
  return (
    <form className="flex items-center w-full md:w-1/2 order-2 md:order-1">
      <input
        type="text"
        placeholder="Buscar país"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        onKeyDown={handleSearch}
        onChange={(e) => setCountry(e.target.value)}
      />
      <div className="ml-[-25px] text-white cursor-pointer">
        <AiOutlineSearch />
      </div>
    </form>
  );
};

export default Input;
