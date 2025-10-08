import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to our devops ci\/cd pipeline demo/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders project description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/this is a simple react application for lspp 2025 assignment 1/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders docker containerization feature', () => {
  render(<App />);
  const dockerElement = screen.getByText(/docker containerization/i);
  expect(dockerElement).toBeInTheDocument();
});
