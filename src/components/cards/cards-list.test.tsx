import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Page, { getServerSideProps } from '@/pages';
import { assertHasProps, gsspCtx } from '@/test-data/context-mock';
import { server } from '@/test-data/server';
import { getAllResults } from '@/test-data/handlers/getAllResults';
import { getNoResults } from '@/test-data/handlers/getNoResults';

describe('Card list', () => {
  const limit = '8';
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should contain specified number of card', async () => {
    server.use(getAllResults(limit));
    async function gssp() {
      const res = await getServerSideProps(gsspCtx({ query: { limit } }));
      return res;
    }
    const res = await gssp();
    assertHasProps(res);

    render(<Page {...res.props} />);

    expect(await screen.findByRole('list')).toBeInTheDocument();
    const elements = await screen.findAllByRole('listitem');
    expect(elements).toHaveLength(Number(limit));
  });

  it('should display the appropriate message if no cards are present', async () => {
    server.use(getNoResults());
    async function gssp() {
      const res = await getServerSideProps(gsspCtx());
      return res;
    }
    const res = await gssp();
    assertHasProps(res);

    render(<Page {...res.props} />);

    const message = await screen.findByText(
      'No results found. Remove the search term and try again'
    );
    expect(message).toBeInTheDocument();
  });
});
