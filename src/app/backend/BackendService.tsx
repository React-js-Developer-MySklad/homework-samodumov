import {Counterparty} from "../model/Counterparty";

const API_URL = 'http://localhost:3000/counterparties';

export function ensureCounterparty(counterparty: Counterparty) {
    if (counterparty.id === undefined) {
        counterparty.id = Math.floor(Math.random() * 10000).toString();
        return fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type' : 'applications/json'},
            body: JSON.stringify(counterparty)
        })
    } else {
        return fetch(`${API_URL}/${counterparty.id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(counterparty)
        })
    }
}

export function getAllCounterparties() {
    return fetch(API_URL);
}

export function removeCounterparty(counterparty: Counterparty) {
    return fetch(`${API_URL}/${counterparty.id}`, {
        method: 'DELETE'
    })
}