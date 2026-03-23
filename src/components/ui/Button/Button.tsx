interface ButtonProps {
    bgColor?: string;
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({ bgColor, text, icon, onClick, disabled }: ButtonProps) {
    const buttonClasses = `flex items-center gap-2 px-4 py-2 rounded-4xl ${bgColor} text-white text-sm font-bold ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`;

    return (
        <button className={buttonClasses} onClick={onClick} disabled={disabled}>
           {icon} {text}
        </button>
    );
}