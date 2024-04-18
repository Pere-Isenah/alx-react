import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders correctly with an empty array or without listNotifications property', () => {
    const { getByText } = render(<Notifications />);
    const noNotificationMessage = getByText('No new notification for now');
    expect(noNotificationMessage).toBeInTheDocument();
  });

  test('renders list of notifications correctly when listNotifications prop is passed', () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" }
    ];
    const { getByText } = render(<Notifications listNotifications={listNotifications} />);
    const courseNotification = getByText('New course available');
    const resumeNotification = getByText('New resume available');
    expect(courseNotification).toBeInTheDocument();
    expect(resumeNotification).toBeInTheDocument();
  });

  test('renders message correctly when listNotifications is empty', () => {
    const { getByText, queryByText } = render(<Notifications />);
    const notificationMessage = getByText('No new notification for now');
    const listNotificationMessage = queryByText('Here is the list of notifications');
    expect(notificationMessage).toBeInTheDocument();
    expect(listNotificationMessage).not.toBeInTheDocument();
  });
});
