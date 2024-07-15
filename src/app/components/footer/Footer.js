
import './footer.css';

export function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "f-container";

    const div = document.createElement("div");
    div.className = "f-div";
    footer.appendChild(div);

    const span = document.createElement("span");
    span.className = "f-content";
    span.innerHTML = "2007 - 2024";
    span.appendChild(document.createElement("br"))

    div.appendChild(span);

    const a = document.createElement("a");
    a.href = "https://moysklad.ru/";
    a.target = "_blank";
    a.className = "hover:underline";
    a.innerHTML = "ООО «Логнекс»";

    span.appendChild(a);

    return footer;
}