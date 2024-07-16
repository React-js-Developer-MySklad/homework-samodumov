import React from "react";

import './header.css';
import {HeaderLogo} from "./logo/HeaderLogo";
import {Button} from "../button/Button";

export type HeaderProps = {
    openModal: () => void;
}

export const Header: React.FC<HeaderProps> = (props:HeaderProps) => {
    return (
        <header>

        </header>
    )
}