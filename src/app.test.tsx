import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Logo is visible and has the correct alt text', () => {
    render(<App />);

    const logo = screen.getByAltText('logo');

    expect(logo).toHaveAttribute('alt', 'logo');
});

test('shows "1" in input when type 1', () => {
    render(<App />);
    
    const input = screen.getByLabelText('billAmount');

    fireEvent.change(input, { target: { value: '1' } });

    expect(input).toHaveValue('1');
})

test('shows "" in input when typing a', () => {
    render(<App />);
    
    const input = screen.getByLabelText('billAmount');

    fireEvent.change(input, { target: { value: 'a' } });

    expect(input).toHaveValue('');
})

test('shows "" in input when typing "."', () => {
    render(<App />);

    const input = screen.getByLabelText('billAmount');

    fireEvent.change(input, { target: { value: '.' } });

    expect(input).toHaveValue('');
});

test('shows "1." in input when typing "." after "1"', () => {
    render(<App />);

    const input = screen.getByLabelText('billAmount');

    fireEvent.change(input, { target: { value: '1' } });

    fireEvent.change(input, { target: { value: '1.' } });

    expect(input).toHaveValue('1.');
});

test('Clicking on 5% set it to 5%', () => {
    render(<App />);

    const button = screen.getByLabelText('5%');
    const input = screen.getByLabelText('Custom Tip Percentage');

    expect(input).toHaveValue('');

    fireEvent.click(button);

    expect(input).toHaveValue('5');
})

test('Clicking on 10% set it to 10%', () => {
    render(<App />);

    const button = screen.getByLabelText('10%');
    const input = screen.getByLabelText('Custom Tip Percentage');

    expect(input).toHaveValue('');

    fireEvent.click(button);

    expect(input).toHaveValue('10');
})

test('Clicking on 15% set it to 15%', () => {
    render(<App />);

    const button = screen.getByLabelText('15%');
    const input = screen.getByLabelText('Custom Tip Percentage');

    expect(input).toHaveValue('');

    fireEvent.click(button);

    expect(input).toHaveValue('15');
})

test('Clicking on 25% set it to 25%', () => {
    render(<App />);

    const button = screen.getByLabelText('25%');
    const input = screen.getByLabelText('Custom Tip Percentage');

    expect(input).toHaveValue('');

    fireEvent.click(button);

    expect(input).toHaveValue('25');
})

test('Clicking on 50% set it to 50%', () => {
    render(<App />);

    const button = screen.getByLabelText('50%');
    const input = screen.getByLabelText('Custom Tip Percentage');

    expect(input).toHaveValue('');

    fireEvent.click(button);

    expect(input).toHaveValue('50');
})

test('Custom tip gets 100% when 100 is inputted', () => {
    render(<App />);
  
    const input = screen.getByLabelText('Custom Tip Percentage');
  
    fireEvent.change(input, { target: { value: '100' } });
  
    expect(input).toHaveValue('100');
});

test('Putting 10 in people input gives 10 in value', () => {
    render(<App />);

    const input = screen.getByLabelText('Number of people');

    fireEvent.change(input, { target: { value: '10' } });

    expect(input).toHaveValue('10');
});

test('Filling in everything gives the correct value', () => {
    render(<App />);
  
    const priceInput = screen.getByLabelText('billAmount');
    const tipInput = screen.getByLabelText('Custom Tip Percentage');
    const peopleInput = screen.getByLabelText('Number of people');
    const perPerson = screen.getByLabelText('tip per person');
    const totalPerPerson = screen.getByLabelText('total per person');
  
    fireEvent.change(priceInput, { target: { value: '142.55' } });
    fireEvent.change(tipInput, { target: { value: '15' } });
    fireEvent.change(peopleInput, { target: { value: '5' } });
  
    expect(perPerson).toHaveTextContent('$4.27');
    expect(totalPerPerson).toHaveTextContent('$32.79');
  });