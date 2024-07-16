import React from "react";

import './footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className={"f-container"}>
            <div className={"f-div"}>
                <span className={"f-content"}>
                    2007 - 2024
                    <br/>
                    <a href={"https://moysklad.ru"} target={"_blank"} >ООО «Логнекс»</a>
                </span>
            </div>
        </footer>
    )
}