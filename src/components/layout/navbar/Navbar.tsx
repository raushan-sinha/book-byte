import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4 shadow-md bg-white">

            {/* Logo */}
            <div className="flex-shrink-0">
                <Logo />
            </div>

            {/* Search */}
            <div className="w-full sm:w-auto sm:flex-1 flex justify-center">
                <SearchBar />
            </div>

            {/* Desktop Navbar */}
            <NavLinks />

        </nav>
    );
}