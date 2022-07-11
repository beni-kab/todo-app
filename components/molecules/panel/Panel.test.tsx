import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';

import { Panel } from '.';

describe('Panel', () => {
  it('Component renders correctly', () => {
    render(
      <Panel>
        <p>panel content</p>
      </Panel>
    );
    const component = screen.getByTestId('panel');
    expect(component).toBeInTheDocument();
  });
});
