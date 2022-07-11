import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '../tests/test-utils';

import Index from '.';

describe('Index', () => {
  it('Parent component renders correctly', () => {
    render(<Index />);
    const component = screen.getByTestId('index');
    expect(component).toBeInTheDocument();
  });
});
