import CategoryCard from "./components/CategoryCard";
import SectionHeader from "./components/SectionHeader";

const Home = () => {
    return (
        <main className="px-6 md:px-12 py-6 space-y-10">
            <header>
                <SectionHeader title="Browse Categories" />
            </header>

            <section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CategoryCard
                        title="Technology"
                        image="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                    />

                    <CategoryCard
                        title="Business"
                        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                    />

                    <CategoryCard
                        title="Self Help"
                        image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    />

                    <CategoryCard
                        title="Fiction"
                        image="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;