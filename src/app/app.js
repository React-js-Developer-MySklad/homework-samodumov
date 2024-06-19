import html from "./app.html";
import './app.css'

import {createTable} from './components/contragents/table/Table';
import {createHeader} from "./components/header/Header";
import {createFooter} from "./components/footer/Footer";

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

rootElement.appendChild(createHeader());
rootElement.appendChild(createTable());
rootElement.appendChild(createFooter());