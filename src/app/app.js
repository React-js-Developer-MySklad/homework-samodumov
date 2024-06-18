import html from "./app.html";
import './app.css'

import {createTable} from './components/contragents/table/Table';
import {openModal} from "./components/contragents/modal/Modal";

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

document.getElementById("table-container").appendChild(createTable());
document.getElementById("open-modal-window").onclick = function (){
    openModal();
}