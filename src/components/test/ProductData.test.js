import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ProductData from '../ProductData/ProductData';

const createProps = (
    phoneInput,
    adminOptionsInput) => ({
        phone: phoneInput,
        adminOptions: adminOptionsInput,
    });

const createComponent = (props) => <ProductData {...props} />;

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
    const props = createProps({ name: 'name', imageFileName: 'img', description: 'desc' }, 'adminOptions');
    const component = createComponent(props);
    act(() => {
        render(component, container);
    });
});

it('renders with props', () => {
    const props = createProps(null, null);
    const component = createComponent(props);

    act(() => {
        render(component, container);
    });
});