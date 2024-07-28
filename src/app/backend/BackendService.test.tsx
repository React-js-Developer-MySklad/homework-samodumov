import React from 'react';

import '@testing-library/jest-dom';

import {ensureCounterparty, getAllCounterparties, removeCounterparty} from "./BackendService";
import {Counterparty} from "../model/Counterparty";

const root = document.createElement('div');
document.body.appendChild(root);

beforeEach(() => {
    getAllCounterparties().then(res => res.json()).then((cs:Counterparty[]) => cs.forEach(c => removeCounterparty(c).then()));
});

describe('BackendService', () => {

    test('get all counterparties return empty',  () => {
       return getAllCounterparties().then(c => expect(c).toHaveLength(0))
    });

    it('get all counterparties return empty', async () => {
        const serviceObjects = await getAllCounterparties();
        expect(serviceObjects).toHaveLength(0);
    });

    it('save counterparty is successful', async () => {
        const c = new Counterparty(undefined, 'name', "123", 'address', "555");
        const counterparties = await ensureCounterparty(c);
        expect(counterparties).toHaveLength(1);
    });

    it('remove counterparty is successfull', async () => {
        const c = new Counterparty(undefined, 'name', "123", 'address', "555");

        await ensureCounterparty(c);

        let counterparties = await getAllCounterparties();
        expect(counterparties).toHaveLength(1);

        counterparties = await removeCounterparty(c);
        expect(counterparties).toHaveLength(0);
    });
});
