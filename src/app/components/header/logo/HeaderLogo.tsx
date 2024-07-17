import React from "react";

import logo from '../../../../resources/logo.svg';

export const HeaderLogo: React.FC = () => {
    return (
        <a data-testid="logo-link-test-id" href="https://moysklad.ru/" target="_blank" className="flex items-center">
            <img src={logo} className={"h-8"} alt={"МойСклад"}/>
        </a>
    )
}