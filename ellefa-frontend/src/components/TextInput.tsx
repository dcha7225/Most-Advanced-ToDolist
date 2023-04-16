import React from "react";
import "./TextInput.css";

interface Props {
    text: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ text, onChange }: Props) {
    return (
        <div className="inline">
            <input
                type="text"
                value={text}
                className="form-control"
                onChange={onChange}
            />
        </div>
    );
}

export default TextInput;
