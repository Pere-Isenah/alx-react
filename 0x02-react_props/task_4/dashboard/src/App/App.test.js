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

  test('contains the Login component when isLoggedIn is false', () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const loginComponent = getByTestId('login');

    expect(loginComponent).toBeInTheDocument();
    expect(queryByTestId('course-list')).not.toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    const { getByTestId } = render(<App />);
    const footerComponent = getByTestId('footer');

    expect(footerComponent).toBeInTheDocument();
  });

  describe('when isLoggedIn is true', () => {
    test('does not contain the Login component', () => {
      const { queryByTestId } = render(<App isLoggedIn={true} />);
      const loginComponent = queryByTestId('login');

      expect(loginComponent).not.toBeInTheDocument();
    });

    test('contains the CourseList component', () => {
      const { getByTestId } = render(<App isLoggedIn={true} />);
      const courseListComponent = getByTestId('course-list');

      expect(courseListComponent).toBeInTheDocument();
    });
  });
});