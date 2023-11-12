import { AppContextProvider } from 'context/app-context';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { allResults, singleShow } from 'test-data/fetched-data';
import { MainPage } from 'pages/main/main';
import * as ApiCalls from 'services/api-service';
import * as hook from 'hooks/useDetailedInfo';
import userEvent from '@testing-library/user-event';

describe('Detailed Card component', async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should display a loading indicator while fetching data', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(allResults),
      })
    );

    vi.spyOn(hook, 'useDetailedInfo').mockImplementation(() =>
      Promise.resolve([null, true, false])
    );

    render(
      <BrowserRouter>
        <AppContextProvider>
          <MainPage></MainPage>
        </AppContextProvider>
      </BrowserRouter>
    );

    const link = await screen.findByText('End of the String');
    await userEvent.click(link);
    waitFor(async () => {
      const loading = await screen.findByText('Loading...');
      expect(loading).toBeInTheDocument();
    });
  });

  it('should display the detailed card data', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(allResults),
      })
    );

    vi.spyOn(ApiCalls, 'getShow').mockImplementation(() =>
      Promise.resolve(singleShow)
    );

    render(
      <BrowserRouter>
        <AppContextProvider>
          <MainPage></MainPage>
        </AppContextProvider>
      </BrowserRouter>
    );

    const link = await screen.findByText('End of the String');
    await userEvent.click(link);
    waitFor(async () => {
      const countryLabel = await screen.findByText('Country:');
      const descriptionLabel = await screen.findByText('Description:');
      const yearLabel = await screen.findByText('Year:');
      const statusLabel = await screen.findByText('Status:');
      const ratingLabel = await screen.findByText('Imdb rating:');
      const country = await screen.findByText(singleShow.result.country);
      const description = await screen.findByText(
        singleShow.result.description
      );
      const year = await screen.findByText(singleShow.result.year);
      const status = await screen.findByText(singleShow.result.status);
      const rating = await screen.findByText(singleShow.result.rating);
      expect(countryLabel).toBeInTheDocument();
      expect(descriptionLabel).toBeInTheDocument();
      expect(yearLabel).toBeInTheDocument();
      expect(statusLabel).toBeInTheDocument();
      expect(ratingLabel).toBeInTheDocument();
      expect(country).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(year).toBeInTheDocument();
      expect(status).toBeInTheDocument();
      expect(rating).toBeInTheDocument();
    });
  });

  it('should hide the componentng on the close button click', async () => {
    vi.spyOn(ApiCalls, 'getAllData').mockImplementation(() =>
      Promise.resolve(allResults)
    );

    vi.spyOn(ApiCalls, 'getShow').mockImplementation(() =>
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
      const close = await screen.findByTestId('close-button');
      await userEvent.click(close);
      waitFor(async () => {
        const details = await screen.findByTestId('details-component');
        expect(details).not.toBeInTheDocument();
      });
    });
  });
});
