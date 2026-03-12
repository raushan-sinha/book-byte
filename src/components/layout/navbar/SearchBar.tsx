import type React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Searching for:', query);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^[a-zA-Z\s]*$/.test(value)) {
            setQuery(value);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center w-full max-w-xl bg-white border border-black rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
            <BiSearch className="text-black mr-2" size={25} />

            <input
                type="text"
                id="search"
                name="search"
                autoComplete="off"
                placeholder="Search books, authors..."
                value={query}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
            />
        </form>
    );
}

export default SearchBar;