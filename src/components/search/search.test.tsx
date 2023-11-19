import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './search';
import { SEARCH_TERM } from 'consts/consts';
import { Provider } from 'react-redux';
import { store } from 'store-manager/store';
import { useParams } from 'hooks/useParams';

describe('Search component', async () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should set the value to the local storage', async () => {
    const searchTerm = 'game';
    const user = userEvent.setup();

    const Search = () => {
      useParams();

      return (
        <>
          <SearchBar></SearchBar>
        </>
      );
    };

    render(
      <MemoryRouter initialEntries={['/search=']}>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>
    );

    const searchInput = await screen.findByPlaceholderText('SEARCH');
    await user.type(searchInput, searchTerm);
    const searchSubmit = await screen.findByTestId('search-submit');
    await user.click(searchSubmit);
    const local = localStorage.getItem(SEARCH_TERM);
    expect(local).toBe(searchTerm);
  });

  it('should retrieve the value from the local storage upon mounting', async () => {
    const searchTerm = 'game';
    localStorage.setItem(SEARCH_TERM, searchTerm);

    const Search = () => {
      useParams();
      return (
        <>
          <SearchBar></SearchBar>
        </>
      );
    };

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    );
    const searchInput = await screen.findByPlaceholderText('SEARCH');
    expect(searchInput).toHaveDisplayValue(searchTerm);
  });
});
