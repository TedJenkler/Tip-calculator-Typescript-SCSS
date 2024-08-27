import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Logo is visible and has the correct alt text', () => {
    render(<App />);

    const logo = screen.getByAltText('logo');

    expect(logo).toHaveAttribute('alt', 'logo');
});