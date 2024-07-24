import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListPage from './ListPage';

test('renders list page', () => {
  render(
    <BrowserRouter>
      <ListPage list={[]} category="Companies" onSearch={() => {}} />
    </BrowserRouter>
  );
  expect(screen.getByPlaceholderText(/Search Companies.../i)).toBeInTheDocument();
});