import React from 'react';

import '@testing-library/jest-dom';

import {render} from "@testing-library/react";
import {Header} from "./Header";
import {HeaderLogo} from "./logo/HeaderLogo";
import {Button} from "../button/Button";

const root = document.createElement('div');
document.body.appendChild(root);

jest.mock("./logo/HeaderLogo", () => ({
    HeaderLogo: () => <div data-testid="HeaderLogo">HeaderLogo</div>,
}));

jest.mock("../button/Button", () => ({
    Button: () => <div data-testid="Button">Button</div>
}));

test('Header has HeaderLogo', () => {

    const { getByTestId } = render(<Header openModal={jest.fn}/>);

    expect(getByTestId("HeaderLogo")).toBeInTheDocument();
});

test('Header has HeaderButton', () => {

    const { getByTestId } = render(<Header openModal={jest.fn}/>);

    expect(getByTestId("Button")).toBeInTheDocument();
});