import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './search';
import mockRouter from 'next-router-mock';

describe('Search component', async () => {
  it('should set the value to Url', async () => {
    const searchTerm = 'game';
    const user = userEvent.setup();

    render(<SearchBar search="" />);

    const searchInput = await screen.findByPlaceholderText('SEARCH');
    await user.type(searchInput, searchTerm);
    const searchSubmit = await screen.findByTestId('search-submit');
    await user.click(searchSubmit);
    expect(mockRouter.query.search).toBe(searchTerm);
  });
});
