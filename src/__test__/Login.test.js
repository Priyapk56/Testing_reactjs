import { render, screen } from '@testing-library/react';
import Login from '../Login'; 

test('checking component loaded', () => {
    
    render(<Login/>);
    
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
});

test('checking email & passwords inputs are empty', () => {

    render(<Login/>);

    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");

    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");

});