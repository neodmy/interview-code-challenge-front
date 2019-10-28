import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CustomModal from '../CustomModal/CustomModal';

const createProps = (
    initialContentInput,
    loadingInput,
    errorInput,
    showInput,
    onHideInput,
    titleInput,
    onConfirmInput) => ({
        initialContent: initialContentInput,
        loading: loadingInput,
        error: errorInput,
        show: showInput,
        onHide: onHideInput,
        title: titleInput,
        onConfirm: onConfirmInput
    });

const createComponent = (props) => <CustomModal {...props} />;

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
    const props = createProps('init', true, 'error', true, () => { }, 'title', () => { });
    const component = createComponent(props);
    act(() => {
        render(component, container);
    })
});

it('renders without props', () => {
    const props = createProps(null, null, null, null, null, null, null);
    const component = createComponent(props);
    act(() => {
        render(component, container);
    })
});