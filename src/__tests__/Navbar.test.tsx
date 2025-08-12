import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/layout/Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
