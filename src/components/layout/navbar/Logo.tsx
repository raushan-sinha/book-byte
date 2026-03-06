import { useEffect, useState } from "react";

const Logo = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 600);

        return () => clearTimeout(timer);
    })

    return (
        <div className="flex items-center font-bold text-2xl select-none">

            <span className="text-blue-500 animate-bounce">
                B
            </span>

            <span className={`transition-all duration-700 ${showText
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                    }`}>
                ookByte
            </span>

        </div>
    );
}

export default Logo;