interface Props {
    title: string
}

const SectionHeader = ({ title }: Props) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button className="text-sm text-indigo-600 hover:underline">
                View All
            </button>
        </div>
    );
}

export default SectionHeader;