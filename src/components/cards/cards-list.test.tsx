import { render, screen } from '@testing-library/react';
import { allResults } from 'test-data/fetched-data';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { MainPage } from 'pages/main/main';
import { Provider } from 'react-redux';
import { store } from 'store-manager/store';
import { CardsList } from './cards-list';

describe('Card list', () => {
  const limit = '20';
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should contain specified number of card', async () => {
    render(
      <MemoryRouter initialEntries={[`?limit=${limit}&page=${1}`]}>
        <Provider store={store}>
          <CardsList></CardsList>
        </Provider>
      </MemoryRouter>
    );

    expect(await screen.findByRole('list')).toBeInTheDocument();
    const elements = await screen.findAllByRole('link');
    expect(elements).toHaveLength(allResults.result.length);
  });

  it('should display the appropriate message if no cards are present', async () => {
    render(
      <MemoryRouter
        initialEntries={[`?limit=${limit}&page=${1}&search=no-results`]}
      >
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );
    const message = await screen.findByText(
      'No results found. Remove the search term and try again'
    );
    expect(message).toBeInTheDocument();
  });
});
