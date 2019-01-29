import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../components/display';

describe('<Display />', () => {
  it('display the count of balls for the at-bat starting at 0', () => {
    // [ { id: 1, name: 'Pedro Martinez' } ]
    const balls = 0;
    const { getByTestId, debug } = render(<Display />);

    // debug();

    const balls = getByTestId('balls');

    // expect(title.innerHTML).toBe('1');
    expect(balls).toBe(0);
  });
});
