import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react link component', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/header/i);
  expect(linkElement).toBeInTheDocument();
});
