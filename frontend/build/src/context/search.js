import { useState, useContext, createContext } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
   keywor:"",
   results:[],
  });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom Hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
