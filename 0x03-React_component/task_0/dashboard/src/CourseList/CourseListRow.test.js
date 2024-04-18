import React from 'react';
import { render } from '@testing-library/react';
import { CourseListRow } from './CourseListRow';

describe('CourseListRow component', () => {
  test('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header" />
        </tbody>
      </table>
    );

    const thElement = container.querySelector('th');
    expect(thElement).toBeInTheDocument();
    expect(thElement.getAttribute('colSpan')).toBe('2');
  });

  test('renders two cells when textSecondCell is present and isHeader is true', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );

    const thElements = container.querySelectorAll('th');
    expect(thElements.length).toBe(2);
  });

  test('renders correctly two td elements within a tr element when isHeader is false', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
        </tbody>
      </table>
    );

    const trElement = container.querySelector('tr');
    expect(trElement).toBeInTheDocument();

    const tdElements = container.querySelectorAll('td');
    expect(tdElements.length).toBe(2);
  });
});