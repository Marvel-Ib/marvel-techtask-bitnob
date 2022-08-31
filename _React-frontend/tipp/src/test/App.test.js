import { render, screen } from '@testing-library/react';
import App from '../App';

test('ensures all onscreen text renders', () => {
  render(<App />);
  screen.getByText(/Welcome to Tipp/i);
  screen.getByText(/overview of what we offer/i);
  screen.getByText(/send sats onchain to an address/i);
  screen.getByText(/send sats via lightning/i);
  screen.getByText(/May the sats be with you/i);
  screen.getByText(/pay for that match ticket/i);
  screen.getByText(/Pay for your everyday needs/i);
});

test('navbar test', () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Send sats Onchain" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Send sats on Lightning" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
});
