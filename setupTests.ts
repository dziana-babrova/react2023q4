import matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './src/test-data/server';

expect.extend(matchers);

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

beforeAll(() => {
  server.listen();
  vi.mock('next/router', () => require('next-router-mock'));
});

afterAll(() => server.close());
