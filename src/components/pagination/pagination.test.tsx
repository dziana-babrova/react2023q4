import { render, screen, waitFor } from '@testing-library/react';
import { AppContextProvider } from 'context/app-context';
import { BrowserRouter } from 'react-router-dom';
import { totalResult } from 'test-data/fetched-data';
import { vi } from 'vitest';
import { Pagination } from './pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination component', async () => {
  it('should update URL query parameter when page changes', async () => {
    const initialPage = 1;
    const user = userEvent.setup();

    global.fetch = vi.fn().mockReturnValue({
      json: () => Promise.resolve(totalResult),
    });

    render(
      <BrowserRouter>
        <AppContextProvider>
          <Pagination />
        </AppContextProvider>
      </BrowserRouter>
    );

    const nextPage = await screen.findByTestId('page-next');
    await user.click(nextPage);
    await waitFor(() => {
      const urlParams = new URLSearchParams(window.location.search);
      expect(urlParams.get('page')).toBe((initialPage + 1).toString());
    });
  });
});
