
const counterparties = [];

export function saveCounterparty(counterparty) {
    if (counterparty.id === undefined) {
        counterparty.id = Math.random();
        counterparties.push(counterparty);
    } else {
        counterparties.map(c => {
            if (c.id === counterparty.id) {
                return counterparty;
            }
        })
    }
}

export function getCounterparties() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(counterparties);
        }, 0);
    });
}

export function removeCounterparty(counterparty) {
    const index = counterparties.indexOf(counterparty);
    if (index > -1) {
        counterparties.splice(index, 1);
    }
}