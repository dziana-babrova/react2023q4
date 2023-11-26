import { API } from '@/consts/api';
import { HttpResponse, http } from 'msw';
import { noResults, totalResult } from '../fetched-data';

export const getNoResults = () =>
  http.post(API.all_shows, async ({ request }) => {
    const req = await request.json();

    if (JSON.stringify(req).includes('shows.Get')) {
      return HttpResponse.json(noResults);
    }

    if (JSON.stringify(req).includes('shows.Count')) {
      return HttpResponse.json(totalResult);
    }

    return HttpResponse.json();
  });
