import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  test('renders the 5 different rows', () => {
    const { getByText } = render(<CourseList />);

    // Check if each row is rendered by looking for specific text content
    expect(getByText('Header 1')).toBeInTheDocument();
    expect(getByText('Header 2')).toBeInTheDocument();
    expect(getByText('Data 1')).toBeInTheDocument();
    expect(getByText('Data 2')).toBeInTheDocument();
    expect(getByText('Data 3')).toBeInTheDocument();
  });
});