import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  test('renders correctly with an empty array or without listCourses property', () => {
    const { getByText } = render(<CourseList />);
    const noCourseMessage = getByText('No course available yet');
    expect(noCourseMessage).toBeInTheDocument();
  });

  test('renders list of courses correctly when listCourses prop is passed', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const { getByText } = render(<CourseList listCourses={listCourses} />);
    const courseES6 = getByText('ES6');
    const courseWebpack = getByText('Webpack');
    const courseReact = getByText('React');
    expect(courseES6).toBeInTheDocument();
    expect(courseWebpack).toBeInTheDocument();
    expect(courseReact).toBeInTheDocument();
  });
});
