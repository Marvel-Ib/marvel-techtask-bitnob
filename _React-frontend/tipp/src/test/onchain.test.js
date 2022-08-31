import { render, screen } from '@testing-library/react';
import { Ln } from '../components/ln';

test('ensures all onscreen text renders', () => {
  render(<Ln />);
  screen.getByText(/paste the testnet lightning invoice/i);
  screen.getByText(/may the sats be with you/i);
});


test('ensures button is available', () => {
  render(<Ln />);
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button")).not.toBeDisabled();
});


