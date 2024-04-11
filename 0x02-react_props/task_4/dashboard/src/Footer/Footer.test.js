import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer'; // Import your Footer component

describe('Footer component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });

  test('renders the text "Copyright"', () => {
    const { getByText } = render(<Footer />);
    const copyrightElement = getByText(/copyright/i);

    expect(copyrightElement).toBeInTheDocument();
  });
});
