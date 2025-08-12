import { render, screen } from '@testing-library/react';
import MenuPage from '../app/menu/page';
import '@testing-library/jest-dom';

describe('Menu Page', () => {
  it('renders menu heading and pizza items', () => {
    render(<MenuPage />);
    expect(screen.getByText('Our Menu')).toBeInTheDocument();
    expect(screen.getByText('Margherita')).toBeInTheDocument();
    expect(screen.getByText('Pepperoni')).toBeInTheDocument();
    expect(screen.getByText('Veggie')).toBeInTheDocument();
  });
});
