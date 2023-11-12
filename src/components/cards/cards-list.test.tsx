import { render, screen } from '@testing-library/react';
import { allResults, noResults } from 'test-data/fetched-data';
import { CardsList } from './cards-list';
import { vi } from 'vitest';
import { AppContextProvider } from 'context/app-context';
import { MemoryRouter } from 'react-router-dom';
import { MainPage } from 'pages/main/main';

describe('Card list', () => {
  const limit = 8;
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should contain specified number of card', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(allResults),
      })
    );

    render(
      <MemoryRouter initialEntries={[`?limit=${limit}`]}>
        <AppContextProvider>
          <CardsList />
        </AppContextProvider>
      </MemoryRouter>
    );

    expect(await screen.findByRole('list')).toBeInTheDocument();
    const elements = await screen.findAllByRole('link');
    expect(elements).toHaveLength(allResults.result.length);
  });

  it('should display the appropriate message if no cards are present', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(noResults),
      })
    );

    render(
      <MemoryRouter initialEntries={[`?limit=${limit}`]}>
        <AppContextProvider>
          <MainPage />
        </AppContextProvider>
      </MemoryRouter>
    );

    const message = await screen.findByText(
      'No results found. Remove the search term and try again'
    );
    expect(message).toBeInTheDocument();
  });
});
