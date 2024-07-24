import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import JoblyApi from './api';
import UserContext from './UserContext';

jest.mock('./api');

const mockUserContext = {
  currentUser: null,
  setCurrentUser: jest.fn(),
  token: null,
  setToken: jest.fn(),
};

test('renders loading state initially', () => {
  render(
    <Router>
      <UserContext.Provider value={mockUserContext}>
        <App />
      </UserContext.Provider>
    </Router>
  );
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

test('renders NavBar after loading', async () => {
  JoblyApi.request = jest.fn();
  JoblyApi.request.mockResolvedValueOnce({ companies: [] });
  JoblyApi.request.mockResolvedValueOnce({ jobs: [] });

  render(
    <Router>
      <UserContext.Provider value={mockUserContext}>
        <App />
      </UserContext.Provider>
    </Router>
  );

  await waitFor(() => {
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});