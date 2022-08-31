import { render, screen } from '@testing-library/react';
import { Onchain } from '../components/Onchain';

test('ensures all onscreen text renders', () => {
  render(<Onchain />);
  screen.getByText(/paste the signet\/testnet address/i);
  screen.getByText(/may the sats be with you/i);
});


test('ensures button is available', () => {
  render(<Onchain />);
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button")).not.toBeDisabled();
});
