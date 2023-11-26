import { CardsList } from '@/components/cards/cards-list';
import { Details } from '@/components/details/details';
import { ErrorMessage } from '@/components/error-message/error-message';
import { Pagination } from '@/components/pagination/pagination';
import { SearchBar } from '@/components/search/search';
import { URL_SEARCH_PARAMS } from '@/consts/consts';
import {
  getRunningQueriesThunk,
  getShow,
  getShows,
  getTotal,
} from '@/store-manager/slices/api-slice';
import { wrapper } from '@/store-manager/store';
import { ApiResponse, Show, SingleShowApiResponse } from '@/types/api-types';
import { GetServerSidePropsContext } from 'next';

type MainPageServerSideProps = {
  search: string;
  page: string;
  limit: string;
  shows: ApiResponse<Show[]>;
  total: string;
  isError: boolean;
  card: SingleShowApiResponse;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const { search, page, limit, cardId } = context.query;
    const searchParam = search
      ? search.toString()
      : URL_SEARCH_PARAMS.search_query.default_value;
    const pageParam = page
      ? page.toString()
      : URL_SEARCH_PARAMS.page.default_value;
    const limitParam = limit
      ? limit.toString()
      : URL_SEARCH_PARAMS.limit_per_page.default_value;
    const cardDetailsParam = cardId ? cardId.toString() : null;

    const { data, isError } = await store.dispatch(
      getShows.initiate({
        search: searchParam,
        page: pageParam,
        limit: limitParam,
      })
    );

    const { data: total } = await store.dispatch(
      getTotal.initiate({
        search: searchParam,
        page: pageParam,
        limit: limitParam,
      })
    );

    let card = null;

    if (cardDetailsParam) {
      const { data } = await store.dispatch(getShow.initiate(cardDetailsParam));
      card = data;
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        search: searchParam,
        page: pageParam,
        limit: limitParam,
        shows: data,
        total: total?.result,
        isError,
        card,
      },
    };
  }
);

const MainPage = ({
  search,
  page,
  limit,
  shows,
  total,
  isError,
  card,
}: MainPageServerSideProps) => {
  return (
    <>
      <div className="content-list">
        <div className="page-header">
          <SearchBar search={search} />
        </div>
        {isError && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )}
        {shows?.result && Boolean(shows?.result.length) && (
          <>
            <CardsList shows={shows} />
            <Pagination limit={limit} page={page} total={total}></Pagination>
          </>
        )}
        {!isError && !Boolean(shows?.result.length) && (
          <div>
            <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
          </div>
        )}
      </div>
      {card && <Details card={card} />}
    </>
  );
};

export default MainPage;
