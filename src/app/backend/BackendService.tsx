import {Counterparty} from "../model/Counterparty";

let counterparties = new Array<Counterparty>();

const delay = 1000;

export function ensureCounterparty(counterparty: Counterparty) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (counterparty.id === undefined) {
                counterparty.id = Math.random();
                counterparties = [counterparty, ...counterparties];
            } else {
                counterparties = counterparties.map(c => {
                    if (c.id === counterparty.id) {
                        return counterparty;
                    }
                    return c;
                })
            }
            resolve(counterparties);
        }, delay);
    });

}

export function getAllCounterparties() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(counterparties);
        }, delay)
    });
}

export function removeCounterparty(counterparty: Counterparty) {
    return new Promise((resolve) => {
        setTimeout(() => {
            counterparties = counterparties.filter(c => c.id !== counterparty.id);
            resolve(counterparties);
        }, delay)
    });
}