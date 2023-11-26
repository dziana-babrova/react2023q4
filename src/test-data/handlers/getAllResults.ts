import { API } from '@/consts/api';
import { HttpResponse, http } from 'msw';
import { allResults, totalResult } from '../fetched-data';
import { URL_SEARCH_PARAMS } from '@/consts/consts';

export const getAllResults = (
  limit: string = URL_SEARCH_PARAMS.limit_per_page.default_value
) =>
  http.post(API.all_shows, async ({ request }) => {
    const req = await request.json();
    const { result, jsonrpc, id } = allResults;
    const slicedResult = result.slice(0, Number(limit));

    if (JSON.stringify(req).includes('shows.Get')) {
      return HttpResponse.json({ jsonrpc, result: slicedResult, id });
    }

    if (JSON.stringify(req).includes('shows.Count')) {
      return HttpResponse.json(totalResult);
    }

    return HttpResponse.json();
  });
