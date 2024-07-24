import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

test('renders login form', () => {
  render(
    <BrowserRouter>
      <LoginForm handleUserAuth={() => {}} />
    </BrowserRouter>
  );
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});