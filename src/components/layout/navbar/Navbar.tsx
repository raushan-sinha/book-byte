import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow">
            <Logo />
        </nav>
    );
}