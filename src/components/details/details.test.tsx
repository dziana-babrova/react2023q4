import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { allResults, singleShow } from 'test-data/fetched-data';
import * as ApiCalls from 'services/api-service';
import * as hook from 'hooks/useDetailedInfo';
import userEvent from '@testing-library/user-event';
import App from './../../App';

describe('Detailed Card component', async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should display a loading indicator while fetching data', async () => {
    const user = userEvent.setup();
    vi.spyOn(ApiCalls, 'getAllData').mockImplementation(() =>
      Promise.resolve(allResults)
    );

    vi.spyOn(ApiCalls, 'getShow').mockImplementation(() =>
      Promise.resolve(singleShow)
    );

    const spy = vi
      .spyOn(hook, 'useDetailedInfo')
      .mockReturnValue([null, true, false]);

    render(
      <MemoryRouter initialEntries={[``]}>
        <App />
      </MemoryRouter>
    );

    const link = await screen.findByText('End of the String');
    await user.click(link);
    const details = await screen.findByTestId('details-component');
    expect(details).toBeInTheDocument();
    const loading = await screen.findByText('Loading...');
    expect(loading).toBeInTheDocument();
    expect(spy).toHaveBeenCalled();
  });

  it('should display the detailed card data', async () => {
    const user = userEvent.setup();
    vi.spyOn(ApiCalls, 'getAllData').mockImplementation(() =>
      Promise.resolve(allResults)
    );

    vi.spyOn(ApiCalls, 'getShow').mockImplementation(() =>
      Promise.resolve(singleShow)
    );

    render(
      <MemoryRouter initialEntries={[``]}>
        <App />
      </MemoryRouter>
    );

    const link = await screen.findByText('End of the String');
    await user.click(link);
    const countryLabel = await screen.findByText('Country:');
    const descriptionLabel = await screen.findByText('Description:');
    const yearLabel = await screen.findByText('Year:');
    const ratingLabel = await screen.findByText('Imdb rating:');
    const country = await screen.findByText(singleShow.result.country);
    const description = await screen.findByText(singleShow.result.description);
    const year = await screen.findByText(singleShow.result.year);
    const rating = await screen.findByText(singleShow.result.rating);
    expect(countryLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(yearLabel).toBeInTheDocument();
    expect(ratingLabel).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  it('should hide the componentng on the close button click', async () => {
    vi.spyOn(ApiCalls, 'getAllData').mockImplementation(() =>
      Promise.resolve(allResults)
    );

    vi.spyOn(ApiCalls, 'getShow').mockImplementation(() =>
      Promise.resolve(singleShow)
    );

    render(
      <MemoryRouter initialEntries={[``]}>
        <App />
      </MemoryRouter>
    );

    const link = await screen.findByText('End of the String');
    await userEvent.click(link);
    const details = await screen.findByTestId('details-component');
    const close = await screen.findByTestId('close-button');
    await userEvent.click(close);
    expect(details).not.toBeInTheDocument();
  });
});
