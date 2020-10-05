import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without error', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Products/i);
  expect(titleElement).toBeInTheDocument();
});
