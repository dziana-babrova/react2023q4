import { render, screen } from '@testing-library/react';
import { AppContextProvider } from 'context/app-context';
import { MemoryRouter } from 'react-router-dom';
import { allResults } from 'test-data/fetched-data';
import { vi } from 'vitest';
import { NotFoundPage } from './not-found';

describe('Not found page component', async () => {
  it('should be displayed when navigating to an invalid route', async () => {
    global.fetch = vi.fn().mockReturnValue({
      json: () => Promise.resolve(allResults),
    });

    render(
      <MemoryRouter initialEntries={['/random-page']}>
        <AppContextProvider>
          <NotFoundPage />
        </AppContextProvider>
      </MemoryRouter>
    );

    const message = await screen.findByText("Sorry... The page doesn't exist");
    expect(message).toBeInTheDocument();
  });
});
