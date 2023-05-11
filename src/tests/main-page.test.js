import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainPage from '../../pages/main-page';

test('renders MovieLibrary heading', () => {
  render(<MainPage />);
  const headingElement = screen.getByText(/MovieLibrary/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<MainPage />);
  const inputElement = screen.getByPlaceholderText(/What do you want to watch/i);
  expect(inputElement).toBeInTheDocument();
});
