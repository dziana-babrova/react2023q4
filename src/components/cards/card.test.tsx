import { Card } from './card';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import { allResults } from 'test-data/fetched-data';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import * as api from 'store-manager/slices/api-slice';
import { Layout } from 'components/layout/layout';
import { Details } from 'components/details/details';
import { Provider } from 'react-redux';
import { store } from 'store-manager/store';

describe('Card', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the relevant card data', async () => {
    render(
      <MemoryRouter initialEntries={[``]}>
        <Card {...allResults.result[0]} />
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
    const Element = (
      <div>
        <Card {...allResults.result[0]} />
        <Outlet />
      </div>
    );

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={Element}>
                <Route path="details/:id" element={<Details />} />
              </Route>
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const link = await screen.findByText('End of the String');
    await userEvent.click(link);
    const details = await screen.findByTestId('details-component');
    expect(details).toBeInTheDocument();
  });

  it('should trigger an additional API call to fetch detailed information', async () => {
    const spyOnCall = vi.spyOn(api, 'useGetShowQuery');
    const user = userEvent.setup();

    const Element = (
      <div>
        <Card {...allResults.result[0]} />
        <Outlet />
      </div>
    );

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={Element}>
                <Route path="details/:id" element={<Details />} />
              </Route>
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const link = await screen.findByText('End of the String');
    expect(spyOnCall).not.toHaveBeenCalled();
    await user.click(link);
    expect(spyOnCall).toHaveBeenCalled();
  });
});
