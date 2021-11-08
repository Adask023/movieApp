import React, { useState } from "react";

// testing the api integration in here

interface Props {}

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search query send");
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
};

export default SearchInput;
