import { Card } from './card';
import { render, screen, waitFor } from '@testing-library/react';
import { AppContextProvider } from 'context/app-context';
import { MainPage } from 'pages/main/main';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { allResults, singleShow } from 'test-data/fetched-data';
import { vi } from 'vitest';
import * as moduleApi from 'services/api-service';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the relevant card data', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(allResults),
      })
    );
    render(
      <MemoryRouter initialEntries={[``]}>
        <AppContextProvider>
          <Card {...allResults.result[0]} />
        </AppContextProvider>
      </MemoryRouter>
    );

    const title = await screen.findByText('End of the String');
    const status = await screen.findByText('Canceled/Ended');
    const image = await screen.findByAltText('End of the String');
    expect(title).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('should open a detailed card component when clicked', async () => {
    vi.spyOn(moduleApi, 'getAllData').mockImplementation(() =>
      Promise.resolve(allResults)
    );

    vi.spyOn(moduleApi, 'getShow').mockImplementation(() =>
      Promise.resolve(singleShow)
    );

    render(
      <BrowserRouter>
        <AppContextProvider>
          <MainPage />
        </AppContextProvider>
      </BrowserRouter>
    );

    const link = await screen.findByText('End of the String');
    await userEvent.click(link);
    waitFor(async () => {
      const details = await screen.findByTestId('details-component');
      expect(details).toBeInTheDocument();
    });
  });

  it('should trigger an additional API call to fetch detailed information', async () => {
    const spyOnAllData = vi
      .spyOn(moduleApi, 'getAllData')
      .mockImplementation(() => Promise.resolve(allResults));

    const spyOnShow = vi
      .spyOn(moduleApi, 'getShow')
      .mockImplementation(() => Promise.resolve(singleShow));

    render(
      <BrowserRouter>
        <AppContextProvider>
          <MainPage />
        </AppContextProvider>
      </BrowserRouter>
    );

    const link = await screen.findByText('End of the String');
    expect(spyOnShow).not.toHaveBeenCalled();
    await userEvent.click(link);
    waitFor(async () => {
      expect(spyOnAllData).toHaveBeenCalled();
    });
  });
});
