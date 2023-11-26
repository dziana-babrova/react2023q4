import { API } from '@/consts/api';
import { HttpResponse, http } from 'msw';
import { allResults, singleShow, totalResult } from '../fetched-data';

export const getResultsWithModal = () =>
  http.post(API.all_shows, async ({ request }) => {
    const req = await request.json();

    if (JSON.stringify(req).includes('shows.GetById')) {
      return HttpResponse.json(singleShow);
    }

    if (JSON.stringify(req).includes('shows.Get')) {
      return HttpResponse.json(allResults);
    }

    if (JSON.stringify(req).includes('shows.Count')) {
      return HttpResponse.json(totalResult);
    }

    return HttpResponse.json();
  });
