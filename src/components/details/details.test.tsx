import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { allResults, singleShow } from 'test-data/fetched-data';
import userEvent from '@testing-library/user-event';
import App from './../../App';
import { Details } from './details';
import { Provider } from 'react-redux';
import { store } from 'store-manager/store';
import * as hook from 'hooks/useDetailedInfo';

describe('Detailed Card component', async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should display a loading indicator while fetching data', async () => {
    const user = userEvent.setup();
    vi.spyOn(hook, 'useDetailedInfo').mockReturnValue({
      data: singleShow,
      loading: true,
      error: false,
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/`]}>
          <Details />
        </MemoryRouter>
      </Provider>
    );
    const item = await screen.findByText(allResults.result[0].title);
    user.click(item);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('should display the detailed card data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[``]}>
          <Details />
        </MemoryRouter>
      </Provider>
    );

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
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/details/1`]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const details = await screen.findByTestId('details-component');
    const close = await screen.findByTestId('close-button');
    await userEvent.click(close);
    expect(details).not.toBeInTheDocument();
  });
});
