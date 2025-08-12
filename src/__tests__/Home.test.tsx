import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders heading and order button', () => {
    render(<Home />);
    expect(screen.getByText('Pizza Restaurant')).toBeInTheDocument();
    expect(screen.getByText('Order Now')).toBeInTheDocument();
  });
});
