import { HiHome, HiOutlineBookOpen, HiOutlineStar } from "react-icons/hi";
import type { NavLinkItem } from "../../../types/navbarTypes";
import { BiCategory } from "react-icons/bi";

export const navLinks: NavLinkItem[] = [
    { name: "Home", path: "/", icon: HiHome },
    { name: "Explore Books", path: "/explore-books", icon: HiOutlineBookOpen },
    { name: "Categories", path: "/categories", icon: BiCategory },
    { name: "Best Sellers", path: "/best-sellers", icon: HiOutlineStar },
];