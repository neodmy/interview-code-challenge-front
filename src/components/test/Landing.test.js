import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import Landing from '../Landing/Landing';


let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without props', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Landing />
            </BrowserRouter>
            , container);
    });
});

