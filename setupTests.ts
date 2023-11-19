import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './src/test-data/server';

expect.extend(matchers);

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

beforeAll(() => {
  server.listen();
});

afterAll(() => server.close());
