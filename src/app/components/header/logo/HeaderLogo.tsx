import React from "react";

import logo from '../../../../resources/logo.svg';

export const HeaderLogo: React.FC = () => {
    return (
        <a data-testid="logo-link-test-id" href="src/app/components/header/logo/HeaderLogo" target="_blank" className="flex items-center">
            <img src={logo} className={"h-8"} alt={"МойСклад"}/>
        </a>
    )
}