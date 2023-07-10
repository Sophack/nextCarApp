"use client";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { manufacturers } from "@/constants";


const SearchManufacturer = ({ manufacturer, setManufacturer } : SearchManufacturerProps) => {

  const [query, setQuery] = useState('');
  
//   set variables with regular expressions to filter out spaces and make the search case insensitive

    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')
    )));
  
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
        <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg"  
            width={20} 
            height={20}
            alt="car logo" 
            className="ml-4"/>    
        </Combobox.Button>
        <Combobox.Input 
        className="search-manufacturer__input"
        placeholder="Volkswagen"
        displayValue={(manufacturer: string) => manufacturer}
        onChange={(e) => setQuery(e.target.value)}
        />
        </div>
      </Combobox>
      <Transition
            as={Fragment}
            show={filteredManufacturers.length === 0 && query !== ""}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
        <Combobox.Options
        className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
        static
        >
            {filteredManufacturers.length === 0 && query !== "" && (
                <Combobox.Option
                value={query}
                className="search-manufacturer__option"
                >

                </Combobox.Option>
            )}
        </Combobox.Options>
      </Transition>
    </div>
  )
}

export default SearchManufacturer
