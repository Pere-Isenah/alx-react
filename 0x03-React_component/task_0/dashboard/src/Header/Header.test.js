import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header'; // Import your Header component

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('renders img and h1 tags', () => {
    const { getByRole } = render(<Header />);
    const imgElement = getByRole('img');
    const headingElement = getByRole('heading', { level: 1 });

    expect(imgElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });
});
