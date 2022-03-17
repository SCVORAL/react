import { useState, useEffect } from "react";

const Search = ({ value, search }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(value);
  }, [value])

  return (
    <div className="input-group">
      <input 
        type="text" 
        aria-label="Last name" 
        className="form-control" 
        placeholder="Search" 
        onChange={(event) => search(event.target.value)}
        value={searchValue}
      />
    </div>
  )
}

export default Search;
