import { render, screen } from '@testing-library/react';
import { Pagination } from './pagination';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

describe('Pagination component', async () => {
  it('should update URL query parameter when page changes', async () => {
    const user = userEvent.setup();
    const params = {
      limit: '12',
      page: '1',
      total: 200,
    };

    render(<Pagination {...params} />);
    const nextPage = await screen.findByTestId('page-next');
    await user.click(nextPage);
    expect(mockRouter.query.page).toBe((Number(params.page) + 1).toString());
  });
});
