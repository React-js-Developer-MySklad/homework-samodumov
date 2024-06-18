import {getCounterparties} from "../../../backend/CounterpartyService";
import {render} from "./CounterpartyRow";

import './table.css';

export function createTable() {

    const table = document.createElement("table");
    table.id = "table-id";
    table.className = "w-full text-sm text-gray-500";

    const tableHeader = table.createTHead();
    tableHeader.className = "t-head";

    const tableHeadRow = document.createElement("tr");

    const createTableHeaderCell = function (name, addingStyle) {

        const tableHeaderCell = document.createElement("th");
        tableHeaderCell.className = "px-6 py-3 " + addingStyle;
        tableHeaderCell.scope = "col";
        tableHeaderCell.innerHTML = name;

        return tableHeaderCell;
    }

    tableHeadRow.appendChild(createTableHeaderCell("Наименование", "t-column-w-3"));
    tableHeadRow.appendChild(createTableHeaderCell("ИНН", "t-column-w-2"));
    tableHeadRow.appendChild(createTableHeaderCell("Адрес", "t-column-w-2"));
    tableHeadRow.appendChild(createTableHeaderCell("КПП", "t-column-w-2"));
    tableHeadRow.appendChild(createTableHeaderCell("Удалить", "t-column-w-1"));

    tableHeader.appendChild(tableHeadRow);

    const tableBody = table.createTBody();
    tableBody.id = "table-body-id";

    return table;
}

export function addRow(row) {
    document.getElementById('table-body-id').appendChild(row);
}

export function reload() {

    const tableBody = document.getElementById("table-body-id");

    let child = tableBody.lastElementChild;
    while (child) {
        tableBody.removeChild(child);
        child = tableBody.lastElementChild;
    }

    getCounterparties().then(counterparties => {
        counterparties.forEach(c => {
            addRow(render(c));
        })
    });
}