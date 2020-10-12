import React from "react";
import SearchBar from "material-ui-search-bar";


const SearchRepo = ({ handleReposSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    handleReposSearch(query);
  }
  
  return (
    <SearchBar
      style={{
        width: "60%",
        top: 80,
        alignItems: "center",
        marginbottom: 35,
        margintop: 20,
        margin: "auto",
      }}
      value={query}
      onChange={(newValue) => setQuery(newValue)}
      onRequestSearch={handleSearch}
    />
  );
};

export default SearchRepo;
