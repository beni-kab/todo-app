import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';

import { Typography } from '.';

const props = {
  text: 'Typography component',
};

describe('Typography', () => {
  it('Component renders correctly', function () {
    render(<Typography {...props} />);
    const component = screen.getByTestId('typography');
    expect(component).toBeInTheDocument();
  });
});
