

type ButtonProps = {
    label: string
    backgroundColor?: string
    textColor?: string
}

const Button: React.FC<ButtonProps> = (props) => {
    const {label, backgroundColor, textColor} = props;

    return (
        <button
            type="submit"
            className={`inline-flex items-center justify-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full
                ${backgroundColor ? `${backgroundColor} ${textColor}`
                : "text-white bg-blue-700 hover:bg-blue-800"}
            `}
        >
            {label}
        </button>
    )
}

export default Button;