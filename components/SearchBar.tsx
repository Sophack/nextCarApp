"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        Searchbar
        <div className="search__item">
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}/>

            </div>
    </form>
  )
}

export default SearchBar
