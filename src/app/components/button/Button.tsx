import React from "react";

import './button.css';

type ButtonProps = {
    label: string,
    type: "submit" | "reset" | "button" | undefined,
    click : () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button type={props.type} className="button" onClick={props.click}>
            {props.label}
        </button>
    )
}