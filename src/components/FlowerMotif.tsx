
const FlowerMotif = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 12c2.5-4 5.5-4 8 0-2.5 4-5.5 4-8 0z" />
        <path d="M12 12c-2.5-4-5.5-4-8 0 2.5 4 5.5 4 8 0z" />
        <path d="M12 12c4 2.5 4 5.5 0 8-4-2.5-4-5.5 0-8z" />
        <path d="M12 12c4-2.5 4-5.5 0-8-4 2.5-4 5.5 0 8z" />
        <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
);

export default FlowerMotif;
