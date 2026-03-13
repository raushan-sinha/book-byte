interface Props {
    title: string,
    image: string
}

const CategoryCard = ({ title, image }: Props) => {
    return (
        <div className="relative rounded-xl overflow-hidden cursor-pointer group">

            <img
                src={image}
                className="h-32 w-full object-cover group-hover:scale-105 transition"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                    {title}
                </span>
            </div>

        </div>
    );
}

export default CategoryCard;