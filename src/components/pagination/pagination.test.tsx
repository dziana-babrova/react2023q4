import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Pagination } from './pagination';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store-manager/store';
import { useParams } from 'hooks/useParams';
import { useGetShowsQuery } from 'store-manager/slices/api-slice';

describe('Pagination component', async () => {
  it('should update URL query parameter when page changes', async () => {
    const initialPage = 1;
    const user = userEvent.setup();

    const Element = () => {
      const [search, limit, page] = useParams();
      useGetShowsQuery({ search, limit, page });

      return <Pagination></Pagination>;
    };

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Element />
        </Provider>
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
