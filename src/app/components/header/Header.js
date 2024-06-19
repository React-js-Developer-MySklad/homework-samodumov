import logo from "../../../resources/logo.svg";
import docLogo from "../../../resources/document.svg";
import {openModal} from "../contragents/modal/Modal";

import './header.css';

export function createHeader() {

    const header = document.createElement("header");

    const div1 = document.createElement("div");
    div1.className = "h-div-1";
    header.appendChild(div1);

    const nav = document.createElement("nav");
    nav.className = "bg-white border-gray-200";
    div1.appendChild(nav);

    const div2 = document.createElement("div");
    div2.className = "h-div-2";
    nav.appendChild(div2);

    const a = document.createElement("a");
    a.href = "https://moysklad.ru/";
    a.target = "_blank"
    a.className = "flex items-center";
    div2.appendChild(a);

    const img = document.createElement("img");
    img.src = logo;
    img.className = "h-8";
    img.alt = "МойСклад";
    a.appendChild(img);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "h-button";

    const buttonImg = document.createElement("img");
    buttonImg.src = docLogo;
    buttonImg.className = "h-logo";

    button.appendChild(buttonImg);
    button.innerHTML += "Добавить документ";
    button.onclick = function () {
        openModal();
    }

    div2.appendChild(button);

    return header;
}