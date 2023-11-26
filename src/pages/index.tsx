import { CardsList } from '@/components/cards/cards-list';
import { Pagination } from '@/components/pagination/pagination';
import { SearchBar } from '@/components/search/search';
import { URL_SEARCH_PARAMS } from '@/consts/consts';
import {
  getRunningQueriesThunk,
  getShows,
  getTotal,
} from '@/store-manager/slices/api-slice';
import { wrapper } from '@/store-manager/store';
import { ApiResponse, Show } from '@/types/api-types';
import { GetServerSidePropsContext } from 'next';

type MainPageServerSideProps = {
  search: string;
  page: string;
  limit: string;
  shows: ApiResponse<Show[]>;
  total: string;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const { search, page, limit } = context.query;
    const searchParam = search
      ? search.toString()
      : URL_SEARCH_PARAMS.search_query.default_value;
    const pageParam = page
      ? page.toString()
      : URL_SEARCH_PARAMS.page.default_value;
    const limitParam = limit
      ? limit.toString()
      : URL_SEARCH_PARAMS.limit_per_page.default_value;

    const { data } = await store.dispatch(
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

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        search: searchParam,
        page: pageParam,
        limit: limitParam,
        shows: data,
        total: total?.result,
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
}: MainPageServerSideProps) => {
  console.log(shows);
  return (
    <>
      <div className="content-list">
        <div className="page-header">
          <SearchBar search={search} />
        </div>
        {/* {loading && <Loader></Loader>} */}
        {/* {error && (
          <ErrorMessage text="Oops... An error occurred. Please try again later"></ErrorMessage>
        )} */}
        {shows?.result && Boolean(shows?.result.length) && (
          <>
            <CardsList />
            <Pagination limit={limit} page={page} total={total}></Pagination>
          </>
        )}
        {/* {!loading && !error && !Boolean(shows?.result.length) && (
          <div>
            <ErrorMessage text="No results found. Remove the search term and try again"></ErrorMessage>
          </div>
        )} */}
      </div>
    </>
  );
};

export default MainPage;
