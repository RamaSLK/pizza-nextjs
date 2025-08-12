import { render, screen } from '@testing-library/react';
import ContactPage from '../app/contact/page';
import '@testing-library/jest-dom';

describe('Contact Page', () => {
  it('renders contact heading and form fields', () => {
    render(<ContactPage />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });
});
