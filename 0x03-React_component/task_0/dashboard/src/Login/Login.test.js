import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login'; // Import your Login component

describe('Login component', () => {
  test('renders without crashing', () => {
    render(<Login />);
  });

  test('renders 2 input tags and 2 label tags', () => {
    const { getAllByRole } = render(<Login />);
    const inputElements = getAllByRole('textbox');
    const labelElements = getAllByRole('label');

    expect(inputElements.length).toBe(2);
    expect(labelElements.length).toBe(2);
  });
});
