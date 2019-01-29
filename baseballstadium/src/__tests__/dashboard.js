import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../components/dashboard';
import Display from '../components/display';

describe('<Dashboard />', () => {
  it('Strike Button Clicked', () => {
    const strikes = 0;

    const {
      getDashboardByText: getByText,
      getDashboardByTestId: getByTestId
    } = render(<Dashboard />);
    const {
      getDisplayByText: getByText,
      getDisplayByTestId: getByTestId
    } = render(<Display strikes={strikes} />);

    const selected = getDisplayByText('strikes');
    const button = getDashboardByText(/strike/i);

    fireEvent.click(button);

    expect(selected).toBe(1);
  });
});
