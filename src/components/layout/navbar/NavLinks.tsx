import { Link } from "react-router-dom";
import { navLinks } from "./navLinksData";

const NavLinks = () => {
    return (
        <ul className="hidden lg:flex items-center gap-6 list-none">
            {navLinks.map((link, idx) => (
                <li key={idx}>
                    <Link to={link.path} className="font-medium text-gray-700 hover:text-black transition cursor-pointer">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;