import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

jest.mock('axios');
jest.mock('./api');

describe("SearchForm component", () => {
  test('renders without crashing', () => {
    render(<SearchForm onSearch={() => {}} category="Companies" />);
    expect(screen.getByPlaceholderText(/Search Companies.../i)).toBeInTheDocument();
  });

  test('calls onSearch with correct parameters when form is submitted', () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} category="Jobs" />);
    
    fireEvent.change(screen.getByPlaceholderText(/Search Jobs.../i), { target: { value: 'developer' } });
    fireEvent.click(screen.getByText(/Search/i));
    
    expect(mockOnSearch).toHaveBeenCalledWith('developer', 'Jobs');
  });
});