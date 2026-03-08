import { navLinks } from "./navLinksData";

const NavLinks = () => {
    return (
        <ul className="hidden lg:flex items-center gap-6 list-none">
            {navLinks.map((link, idx) => (
                <li key={idx}>
                    <a className="font-medium text-gray-700 hover:text-black transition cursor-pointer">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;