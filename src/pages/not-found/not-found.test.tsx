import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from './not-found';

describe('Not found page component', async () => {
  it('should be displayed when navigating to an invalid route', async () => {
    render(
      <MemoryRouter initialEntries={['/random-page']}>
        <NotFoundPage />
      </MemoryRouter>
    );

    const message = await screen.findByText("Sorry... The page doesn't exist");
    expect(message).toBeInTheDocument();
  });
});
