import type React from "react";
import { Navbar } from "./components/layout/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExploreBooks from "./pages/ExploreBooks/ExploreBooks";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore-books" element={<ExploreBooks />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;