import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('app', () => {
  it('should be in', () => {
    render(<App />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});
