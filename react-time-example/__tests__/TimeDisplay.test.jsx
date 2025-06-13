import React from 'react';
import { render } from '@testing-library/react';
import TimeDisplay from '../src/TimeDisplay';

describe('TimeDisplay', () => {
  it('matches snapshot', () => {
    const { container } = render(<TimeDisplay />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
