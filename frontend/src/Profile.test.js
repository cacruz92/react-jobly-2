import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile';

test('renders profile page', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
  expect(screen.getByText(/Edit Profile/i)).toBeInTheDocument();
});