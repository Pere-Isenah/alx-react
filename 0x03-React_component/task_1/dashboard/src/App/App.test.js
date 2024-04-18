import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('calls logOut and displays alert when Ctrl+h are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { container } = render(<App logOut={logOutMock} />);
    const appContainer = container.firstChild;

    fireEvent.keyDown(appContainer, { key: 'Control' });
    fireEvent.keyDown(appContainer, { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore(); // Restore alert function to original implementation
  });
});