import { render, screen } from '@testing-library/react';
import NotFoundPage from '../404';

describe('Not found page component', async () => {
  it('should be displayed when navigating to an invalid route', async () => {
    render(<NotFoundPage />);

    const message = await screen.findByText("Sorry... The page doesn't exist");
    expect(message).toBeInTheDocument();
  });
});
