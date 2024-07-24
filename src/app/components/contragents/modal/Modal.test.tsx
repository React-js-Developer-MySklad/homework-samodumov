import React from 'react';

import '@testing-library/jest-dom';

import {getByText, render, screen} from "@testing-library/react";
import {Modal} from "./Modal";

const root = document.createElement('div');
document.body.appendChild(root);

/*test('modal window shows correct when call without counterparty', () => {

    const {getByText} = render(<Modal close={jest.fn}/>);

    expect(getByText("Имя")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите имя")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите имя")).toHaveDisplayValue("");

    expect(getByText("ИНН")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите ИНН")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите ИНН")).toHaveDisplayValue("");

    expect(getByText("Адрес")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите адрес")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите адрес")).toHaveDisplayValue("");

    expect(getByText("КПП")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите КПП")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите КПП")).toHaveDisplayValue("");
});

test('modal window with counterparty can call save function with changed counterparty', () => {


    const c = new Counterparty(1, "name", 123, "address", 444);
    const anotherC = new Counterparty(1, "new name", 123, "address", 444);

    const saveCounterpartyMock = jest.fn();

    const {getByText} = render(<Modal close={jest.fn} saveCounterparty={saveCounterpartyMock} counterparty={c}/>);

    fireEvent.change(screen.getByPlaceholderText("Введите имя"), {target: {value: 'new name'}});
    fireEvent.click(getByText("Обновить Контрагента"));

    expect(saveCounterpartyMock).toHaveBeenCalledTimes(1);
    expect(saveCounterpartyMock).toHaveBeenCalledWith(anotherC);
});*/
