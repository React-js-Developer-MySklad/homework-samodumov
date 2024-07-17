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
            <div className={"h-div-1"}>
                <nav className={"bg-white border-gray-200"}>
                    <div className={"h-div-2"}>
                        <HeaderLogo/>
                        <Button click={props.openModal} label={"Добавить КА"} type={"button"}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}