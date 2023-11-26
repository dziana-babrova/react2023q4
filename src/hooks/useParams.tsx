import { URL_SEARCH_PARAMS } from '@/consts/consts';
import { useRouter } from 'next/router';

export const useParams = () => {
  const router = useRouter();
  const { search, page, limit } = router.query;
  const searchParam = search
    ? search.toString()
    : URL_SEARCH_PARAMS.search_query.default_value;
  const pageParam = page
    ? page.toString()
    : URL_SEARCH_PARAMS.page.default_value;
  const limitParam = limit
    ? limit.toString()
    : URL_SEARCH_PARAMS.limit_per_page.default_value;

  return [searchParam, limitParam, pageParam];
};
