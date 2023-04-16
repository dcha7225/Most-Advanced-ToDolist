interface Props {
    children: String;
    onClick: () => void;
}

function Button({ children, onClick }: Props) {
    return (
        <button
            type="submit"
            className="btn btn-outline-primary btn-sm"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
