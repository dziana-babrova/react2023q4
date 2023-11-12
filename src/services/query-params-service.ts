import { URL_SEARCH_PARAMS } from 'consts/consts';

export function getExistingLimitPerPage(limit: string | null) {
  if (
    limit &&
    Object.values(URL_SEARCH_PARAMS.limit_per_page.options).includes(limit)
  ) {
    return limit;
  }
  return URL_SEARCH_PARAMS.limit_per_page.default_value;
}
