import {openModal} from "../modal/Modal";
import closeIcon from "../../../../resources/close-icon.svg";
import {removeCounterparty} from "../../../backend/CounterpartyService";
import {reload} from "./Table";

export function render(counterparty) {

    const row = document.createElement("tr");

    row.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";

    const createTh = (value) => {
        const th = document.createElement("th");
        th.scope = "row";
        th.className = "px-6 py-4 font-medium whitespace-nowrap dark:text-white";
        th.innerHTML = value;

        return th;
    }

    row.appendChild(createTh(counterparty.name));
    row.appendChild(createTh(counterparty.inn));
    row.appendChild(createTh(counterparty.address));
    row.appendChild(createTh(counterparty.kpp));

    row.appendChild(createCloseButton(counterparty));

    row.ondblclick = function () {
        openModal(counterparty);
    }

    return row;
}

function createCloseButton(counterparty) {
    let th = document.createElement("th");
    th.scope = "row";
    th.class = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";

    const headerCloseButton = document.createElement("button");
    headerCloseButton.type = "button";
    headerCloseButton.className = "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white";

    const img = document.createElement("img");
    img.src = closeIcon;
    img.alt = "Закрыть";
    img.width = 10;
    img.height = 10;

    headerCloseButton.appendChild(img);

    th.onclick = function () {
        removeCounterparty(counterparty);
        reload();
    }

    th.appendChild(headerCloseButton);

    return th;
}