import React from 'react';

import '@testing-library/jest-dom';

import {HeaderLogo} from "./HeaderLogo";
import {render, screen} from "@testing-library/react";

const root = document.createElement('div');
document.body.appendChild(root);

test('logo has correct href and attributes', () => {

    render(<HeaderLogo/>);

    expect(screen.getByTestId('logo-link-test-id')).toHaveAttribute('href', 'https://moysklad.ru/');
    expect(screen.getByTestId('logo-link-test-id')).toHaveAttribute('target', '_blank');
});

test('logo has img', () => {

    render(<HeaderLogo/>);

    const logo = screen.getByRole('img');

    expect(logo).toHaveAttribute('alt', 'МойСклад');
    expect(logo).toHaveAttribute('src');
});
