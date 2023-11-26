import {
  getRunningQueriesThunk,
  getShows,
  getTotal,
} from '@/store-manager/slices/api-slice';
import { wrapper } from '@/store-manager/store';
import { GetServerSidePropsContext } from 'next';
import { URL_SEARCH_PARAMS } from '@/consts/consts';

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

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        search: searchParam,
        page: pageParam,
        limit: limitParam,
        shows: data,
        total: total?.result,
        isError,
      },
    };
  }
);
