import { KeyboardEvent, useRef } from "react";
import "./Styles.scss";

interface ISearchBarProps {
  onSubmit: (value: string) => void;
}
const SearchBar = ({ onSubmit }: ISearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (inputRef.current) {
      onSubmit(inputRef.current.value);
    } else {
      console.error("Input ref element not available");
    }
  };

  return (
    <div className="searchbar-wrapper">
      <input
        ref={inputRef}
        type="text"
        className="search-bar"
        placeholder="Search for products, brands and more"
        onKeyDown={handleSubmit}
      />
      {/* <div className="search-button" onClick={handleSubmit} /> */}
    </div>
  );
};

export default SearchBar;
