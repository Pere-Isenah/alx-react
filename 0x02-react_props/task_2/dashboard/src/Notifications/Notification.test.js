import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('renders without crashing', () => {
    render(<NotificationItem />);
  });

  test('renders correct HTML when type and value props are passed', () => {
    const { getByText } = render(
      <NotificationItem type="default" value="test" />
    );
    const listItemElement = getByText(/test/i);
    expect(listItemElement).toBeInTheDocument();
  });

  test('renders correct HTML when html prop is passed', () => {
    const { container } = render(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const listItemElement = container.querySelector('li');
    expect(listItemElement).toContainHTML('<u>test</u>');
  });
});
