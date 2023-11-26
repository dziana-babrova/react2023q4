import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { singleShow } from '@/test-data/fetched-data';
import userEvent from '@testing-library/user-event';
import { Details } from './details';
import { server } from '@/test-data/server';
import { getResultsWithModal } from '@/test-data/handlers/getResultsWithModal';
import Page, { getServerSideProps } from '@/pages';
import { assertHasProps, gsspCtx } from '@/test-data/context-mock';
import mockRouter from 'next-router-mock';

describe('Detailed Card component', async () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should display the detailed card data', async () => {
    render(<Details card={singleShow} />);

    const countryLabel = await screen.findByText('Country:');
    const descriptionLabel = await screen.findByText('Description:');
    const yearLabel = await screen.findByText('Year:');
    const ratingLabel = await screen.findByText('Imdb rating:');
    const country = await screen.findByText(singleShow.result.country);
    const description = await screen.findByText(singleShow.result.description);
    const year = await screen.findByText(singleShow.result.year);
    const rating = await screen.findByText(singleShow.result.rating);
    expect(countryLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(yearLabel).toBeInTheDocument();
    expect(ratingLabel).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  it('should hide the componentng on the close button click', async () => {
    vi.mock('next/router', () => require('next-router-mock'));

    server.use(getResultsWithModal());
    async function gssp() {
      const res = await getServerSideProps(
        gsspCtx({
          query: {
            ...mockRouter.query,
            cardId: singleShow.result.id.toString(),
          },
        })
      );
      return res;
    }

    const res = await gssp();
    assertHasProps(res);

    render(<Page {...res.props} />);
    const details = await screen.findByTestId('details-component');
    expect(details).toBeInTheDocument();
    const close = await screen.findByTestId('close-button');
    await userEvent.click(close);
    expect(mockRouter.query.cardId).toBeUndefined();
  });
});
