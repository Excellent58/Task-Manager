

type ButtonProps = {
    label: string
    backgroundColor?: string
    textColor?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    const {label, backgroundColor, textColor, onClick} = props;

    return (
        <button
            type="submit"
            className={`inline-flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full
                ${backgroundColor ? `${backgroundColor}`
                : "bg-blue-700 hover:bg-blue-800"}
                ${textColor ? `${textColor}`: "text-white"}
            `}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;