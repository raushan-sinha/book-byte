import type React from "react";
import { Navbar } from "./components/layout/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExploreBooks from "./pages/ExploreBooks/ExploreBooks";
import Categories from "./pages/Categories/Categories";
import BestSellers from "./pages/BestSellers/BestSellers";
import NewArrivals from "./pages/NewArrivals/NewArrivals";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore-books" element={<ExploreBooks />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/best-sellers" element={<BestSellers />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;