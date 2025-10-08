import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to my devops learning journey/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders project description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/what started as a simple react app became a full ci\/cd pipeline/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders docker feature', () => {
  render(<App />);
  const dockerElement = screen.getByText(/multi-stage docker builds/i);
  expect(dockerElement).toBeInTheDocument();
});
