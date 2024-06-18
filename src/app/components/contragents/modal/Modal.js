import {createCloseButton} from "./CloseButton";
import {createButton} from "./Button";
import {Counterparty} from "../../../model/Counterparty";
import {saveCounterparty} from "../../../backend/CounterpartyService";
import {reload} from "../table/Table";

import './modal.css';
import {createInput} from "./Input";

export function openModal(counterparty) {

    const modal = createModalWindow(counterparty);

    document.getElementById("root").appendChild(modal);

    modal.classList.remove("hidden");
    modal.attributes.removeNamedItem("aria-hidden");
    modal.classList.add("flex");

    const background = document.createElement("div");
    background.setAttribute("modal-backdrop", "");
    background.className = "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40";

    let root = document.getElementById("root");
    root.parentNode.insertBefore(background, root.nextSibling);
}

export function closeModal() {
    document.getElementById("crud-modal").remove();
    document.querySelectorAll('[modal-backdrop=""]').forEach(e => e.remove());
}

function createModalWindow(counterparty) {

    const modalContainer = document.createElement("div");
    modalContainer.id = "crud-modal";
    modalContainer.tabIndex = -1;
    modalContainer.setAttribute("aria-hidden", "true");
    modalContainer.className = "modal hidden";

    const div1 = createDiv("relative p-4 m-width max-h-full");
    modalContainer.appendChild(div1);

    const div2 = createDiv("relative bg-white rounded-lg shadow dark:bg-gray-700");
    div1.appendChild(div2);

    div2.appendChild(createHeader());
    div2.appendChild(createBody(counterparty));

    return modalContainer;
}

function createDiv(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
}

function createHeader() {

    const headerContainer = createDiv("flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600");

    const headerTitle = document.createElement("h3");
    headerTitle.className = "text-lg font-semibold text-gray-900 dark:text-white";
    headerTitle.innerHTML = "Контрагент";

    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(createCloseButton());

    return headerContainer;
}

function createBody(counterparty) {

    const form = document.createElement("form");
    form.className = "p-4 md:p-5";
    form.id = "form-id";

    const container = createDiv("grid gap-4 mb-4 grid-cols-2 m-body");
    form.appendChild(container);

    container.appendChild(createInput("Наименование", "text", "name", "name-input-id", "Введите имя", counterparty === undefined ? '' : counterparty.name));
    container.appendChild(createInput("ИНН", "number", "inn", "inn-input-id", "Введите ИНН", counterparty === undefined ? '' : counterparty.inn));
    container.appendChild(createInput("Адрес", "text", "address", "address-input-id", "Введите Адрес", counterparty === undefined ? '' : counterparty.address));
    container.appendChild(createInput("КПП", "number", "kpp", "kpp-input-id", "Введите КПП", counterparty === undefined ? '' : counterparty.kpp));

    if (counterparty === undefined) {
        const callback = () => {

            const c = fillCounterpartyFromForm(new Counterparty());

            closeModal();

            saveCounterparty(c);

            reload();
        }

        form.appendChild(createButton(callback, 'Создать контрагента'));
    } else {
        const callback = () => {

            fillCounterpartyFromForm(counterparty);

            closeModal();

            saveCounterparty(counterparty);

            reload();
        }

        const flexContainer = document.createElement("div");
        flexContainer.className = "m-button-container";

        form.appendChild(flexContainer);

        flexContainer.appendChild(createButton(callback, 'Обновить контрагента'));
        flexContainer.appendChild(createButton(() => closeModal(), "Отменить"));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    return form;
}

function fillCounterpartyFromForm(counterparty) {
    const formElement = document.getElementById("form-id");
    const formData = new FormData(formElement);

    counterparty.name = formData.get("name");
    counterparty.inn = formData.get("inn");
    counterparty.address = formData.get("address");
    counterparty.kpp = formData.get("kpp");

    return counterparty;
}
