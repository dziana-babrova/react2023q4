import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

describe('Not found page component', async () => {
  it('should be displayed when navigating to an invalid route', async () => {
    render(<Layout></Layout>);

    const header = await screen.findByTestId('header');
    const footer = await screen.findByTestId('footer');
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
