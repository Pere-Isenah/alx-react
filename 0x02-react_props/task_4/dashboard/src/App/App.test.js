import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Import your App component

describe('App component', () => {
  test('contains the Notifications component', () => {
    const { getByTestId } = render(<App />);
    const notificationsComponent = getByTestId('notifications');

    expect(notificationsComponent).toBeInTheDocument();
  });

  test('contains the Header component', () => {
    const { getByTestId } = render(<App />);
    const headerComponent = getByTestId('header');

    expect(headerComponent).toBeInTheDocument();
  });

  test('contains the Login component', () => {
    const { getByTestId } = render(<App />);
    const loginComponent = getByTestId('login');

    expect(loginComponent).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    const { getByTestId } = render(<App />);
    const footerComponent = getByTestId('footer');

    expect(footerComponent).toBeInTheDocument();
  });
});
