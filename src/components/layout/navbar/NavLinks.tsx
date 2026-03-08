import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navLinksData";

const NavLinks = () => {
    const location = useLocation();

    return (
        <ul className="hidden lg:flex items-center gap-6 list-none">
            {navLinks.map((link, idx) => (
                <li key={idx}>
                    <Link to={link.path} className={`font-medium text-gray-700 transition cursor-pointer ${location.pathname === link.path ? 'underline underline-offset-4 decoration-2 text-red-600' : ''}`}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;