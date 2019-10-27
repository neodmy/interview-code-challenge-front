import React from 'react';
import ReactDOM from 'react-dom';
import PhoneCard from './PhoneCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhoneCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
