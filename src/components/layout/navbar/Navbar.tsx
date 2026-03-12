import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <nav className="relative flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4 shadow-md bg-white">
            {/* Logo */}
            <div className="shrink-0" onClick={handleNavigate}>
                <Logo />
            </div>

            {/* Search */}
            <div className="w-full sm:w-auto sm:flex-1 flex justify-center">
                <SearchBar />
            </div>

            {/* Desktop Nav */}
            <NavLinks />

            {/* Authbuttons */}
            <AuthButtons />

            {/* Mobile Menu */}
            <div className="absolute top-4 right-4 lg:hidden">
                <MobileMenu />
            </div>
        </nav>
    );
}
