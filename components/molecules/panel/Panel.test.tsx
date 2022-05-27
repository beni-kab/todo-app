import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';

import { Panel } from '.';

const props = {
  children: <></>,
};

describe('Panel', () => {
  it('Component renders correctly', function () {
    render(<Panel {...props} />);
    const component = screen.getByTestId('panel');
    expect(component).toBeInTheDocument();
  });
});
