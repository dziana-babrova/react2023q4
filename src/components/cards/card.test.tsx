import { Card } from './card';
import { render, screen } from '@testing-library/react';
import { allResults, singleShow } from '@/test-data/fetched-data';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { server } from '@/test-data/server';
import Page, { getServerSideProps } from '@/pages';
import { assertHasProps, gsspCtx } from '@/test-data/context-mock';
import mockRouter from 'next-router-mock';
import { getAllResults } from '@/test-data/handlers/getAllResults';

describe('Card', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the relevant card data', async () => {
    render(<Card {...allResults.result[0]} />);

    const title = await screen.findByText('End of the String');
    const status = await screen.findByText('Canceled/Ended');
    const image = await screen.findByAltText('End of the String');
    expect(title).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('should set a query param when card component clicked', async () => {
    vi.mock('next/router', () => require('next-router-mock'));

    server.use(getAllResults());
    async function gssp() {
      const res = await getServerSideProps(
        gsspCtx({ query: { ...mockRouter.query } })
      );
      return res;
    }
    const res = await gssp();
    assertHasProps(res);

    render(<Page {...res.props} />);

    const link = await screen.findByText('End of the String');
    await userEvent.click(link);
    expect(mockRouter.query.cardId).toBe(singleShow.result.id);
  });
});
