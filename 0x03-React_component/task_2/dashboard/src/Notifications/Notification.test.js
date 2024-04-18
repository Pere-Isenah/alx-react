import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('calls markAsRead with correct ID when notification is clicked', () => {
    // Define a spy function
    const markAsReadSpy = jest.fn();

    // Define list of notifications
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" }
    ];

    // Render the component with listNotifications and markAsRead spy
    const { getByText } = render(<Notifications listNotifications={listNotifications} markAsRead={markAsReadSpy} />);
    
    // Find and click on a notification
    const courseNotification = getByText('New course available');
    fireEvent.click(courseNotification);

    // Assert that markAsRead spy is called with the correct ID
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});