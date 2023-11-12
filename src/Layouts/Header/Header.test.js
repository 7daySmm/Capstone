import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

test('it renders the Topbar component correctly', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  
  expect(screen.getByAltText('logo')).toBeInTheDocument();


  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Menu')).toBeInTheDocument();
  expect(screen.getByText('Reservations')).toBeInTheDocument();
  expect(screen.getByText('Order Online')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});