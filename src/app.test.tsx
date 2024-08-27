import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Logo is visible and has the correct alt text', () => {
    render(<App />);

    const logo = screen.getByAltText('logo');

    expect(logo).toHaveAttribute('alt', 'logo');
});

test('shows "1" in input when typed', () => {
    render(<App />);
    
    const input = screen.getByLabelText('billAmount');

    fireEvent.change(input, { target: { value: '1' } });

    expect(input).toHaveValue('1');
})