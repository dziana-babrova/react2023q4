import { render, screen } from '@testing-library/react';
import { AppContextProvider } from 'context/app-context';
import { BrowserRouter } from 'react-router-dom';
import { allResults } from 'test-data/fetched-data';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './search';
import { SEARCH_TERM } from 'consts/consts';

describe('Search component', async () => {
  it('should update URL query parameter when page changes', async () => {
    const searchTerm = 'game';
    const user = userEvent.setup();

    global.fetch = vi.fn().mockReturnValue({
      json: () => Promise.resolve(allResults),
    });

    render(
      <BrowserRouter>
        <AppContextProvider>
          <SearchBar />
        </AppContextProvider>
      </BrowserRouter>
    );

    const searchInput = await screen.findByPlaceholderText('SEARCH');
    await user.type(searchInput, searchTerm);
    const searchSubmit = await screen.findByTestId('search-submit');
    await user.click(searchSubmit);
    const local = localStorage.getItem(SEARCH_TERM);
    expect(local).toBe(searchTerm);
  });

  it('should update URL query parameter when page changes', async () => {
    const searchTerm = 'game';
    localStorage.setItem(SEARCH_TERM, searchTerm);

    global.fetch = vi.fn().mockReturnValue({
      json: () => Promise.resolve(allResults),
    });

    render(
      <BrowserRouter>
        <AppContextProvider>
          <SearchBar />
        </AppContextProvider>
      </BrowserRouter>
    );

    const searchInput = await screen.findByPlaceholderText('SEARCH');
    expect(searchInput).toHaveDisplayValue(searchTerm);
  });
});
