import React from 'react';

import '@testing-library/jest-dom';

import {fireEvent, getByText, render, screen} from "@testing-library/react";
import {Table} from "./Table";
import {Counterparty} from "../../../model/Counterparty";

const root = document.createElement('div');
document.body.appendChild(root);

test('table has correct columns', () => {

    const handleOpenModal = jest.fn();
    const dropCounterparty = jest.fn();

    render(<Table openModal={handleOpenModal} dropCounterparty={dropCounterparty} counterparties={[]}/>);

    expect(screen.getAllByRole('columnheader')).toHaveLength(5);
});

test('each row can be doubleclicked and run function', () => {

    const handleOpenModal = jest.fn();
    const dropCounterparty = jest.fn();

    const c = new Counterparty(1, 'name', 111, 'address', 11111);

    const {getByText} = render(<Table openModal={handleOpenModal} dropCounterparty={dropCounterparty} counterparties={[c]}/>);

    expect(handleOpenModal).toHaveBeenCalledTimes(0);

    fireEvent.doubleClick(getByText('name'));

    expect(handleOpenModal).toHaveBeenCalledTimes(1);
    expect(handleOpenModal).toHaveBeenCalledWith(c);
});

test('each row can be deleted', () => {
    const handleOpenModal = jest.fn();
    const dropCounterparty = jest.fn();

    const c = new Counterparty(1, 'name', 111, 'address', 11111);

    const {getByAltText} = render(<Table openModal={handleOpenModal} dropCounterparty={dropCounterparty} counterparties={[c]}/>);

    expect(handleOpenModal).toHaveBeenCalledTimes(0);
    expect(dropCounterparty).toHaveBeenCalledTimes(0);

    fireEvent.click(getByAltText('Удалить'));

    expect(dropCounterparty).toHaveBeenCalledTimes(1);
    expect(dropCounterparty).toHaveBeenCalledWith(c);
});

test('table has rows like counterparties', () => {

    const c1 = new Counterparty(1, 'name_1', 111, 'address_1', 11111);
    const c2 = new Counterparty(2, 'name_2', 222, 'address_2', 22222);
    const c3 = new Counterparty(3, 'name_3', 333, 'address_3', 3333);

    const {getAllByRole} = render(<Table openModal={jest.fn()} dropCounterparty={jest.fn()} counterparties={[c1, c2, c3]}/>);

    expect(getAllByRole('row')).toHaveLength(1 + 3);// header + counterparties

    expect(getAllByRole('row')[1]).toHaveTextContent('name_1');
    expect(getAllByRole('row')[2]).toHaveTextContent('name_2');
    expect(getAllByRole('row')[3]).toHaveTextContent('name_3');
});
