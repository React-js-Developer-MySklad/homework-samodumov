import closeIcon from "../../../../resources/close-icon.svg";
import {closeModal} from "./Modal";

export function createCloseButton() {

    const headerCloseButton = document.createElement("button");
    headerCloseButton.type = "button";
    headerCloseButton.className = "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white";

    const img = document.createElement("img");
    img.src = closeIcon;
    img.alt = "Закрыть";
    img.width = 20;
    img.height = 20;

    headerCloseButton.appendChild(img);

    headerCloseButton.onclick = function () {
        closeModal();
    }

    return headerCloseButton;
}