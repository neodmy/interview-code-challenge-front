import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import PhoneCard from '../PhoneCard/PhoneCard';
import { BrowserRouter } from 'react-router-dom';

const createProps = (imgInput, nameInput, descriptionInput, clickedInput) => ({
    img: imgInput,
    name: nameInput,
    description: descriptionInput,
    clicked: clickedInput,
});

const createComponent = (props) => (
    <BrowserRouter>
        <PhoneCard {...props} />
    </BrowserRouter>);

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

it('renders with props', () => {
    const props = createProps('img', 'name', 'description', () => { });
    const component = createComponent(props);
    act(() => {
        render(component, container);

    })
});

it('renders without props', () => {
    const props = createProps(null, null, null, null);
    const component = createComponent(props);
    act(() => {
        render(component, container);
    });
});

