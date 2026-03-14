import { useEffect, useState } from "react";
import type { Category } from "../../../types/homeTypes";

interface Props {
    title: string,
}

const categories: Category[] = [
    { name: 'Technology', color: 'text-red-500' },
    { name: 'Business', color: 'text-cyan-500' },
    { name: 'Self Help', color: 'text-amber-500' },
    { name: 'Fiction', color: 'text-green-500' },
]

const SectionHeader = ({ title }: Props) => {
    const [idx, setIdx] = useState<number>(0);

    // Logic for showing categories after 2 seconds -
    useEffect(() => {
        const timer = setInterval(() => {
            setIdx((prev) => (prev + 1) % categories.length);
        }, 2000);

        return () => clearInterval(timer);
    });


    return (
        <div className="flex flex-col lg:flex-row md:flex-row lg:items-center justify-between mb-4">
            <h2 className='text-xl font-semibold whitespace-nowrap'>{title}
                <span className={`${categories[idx].color} font-mono font-bold`}> {categories[idx].name}</span>
            </h2>
            <button className="lg:flex md:flex px-5 py-2 text-sm font-semibold text-white bg-cyan-700 rounded-md hover:bg-cyan-600 transition cursor-pointer">
                View All
            </button>
        </div >
    );
}

export default SectionHeader;