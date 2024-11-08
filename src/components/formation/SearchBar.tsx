import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative mt-2 rounded-xs shadow-sm flex">

            <input
                id="search"
                name="search"
                type="text"
                placeholder="Rechercher une formation, Ex: Diplomatie"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button className="hover:bg-primary text-primary mx-6 py-2 px-4 text-xs rounded border border-primary">
                Button
            </button>
        </div>
    )
}

export default SearchBar;
