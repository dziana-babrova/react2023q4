import { setupServer } from 'msw/node';
import { handlers } from './handlers/handlers';

export const server = setupServer(
  ...handlers
  // http.post(API.all_shows, async ({ request }) => {
  //   const req = await request.json();

  //   if (JSON.stringify(req).includes('shows.GetById')) {
  //     return HttpResponse.json(singleShow);
  //   }

  //   if (
  //     JSON.stringify(req).includes('shows.Get') &&
  //     JSON.stringify(req).includes('no-results')
  //   ) {
  //     return HttpResponse.json(noResults);
  //   }

  //   if (JSON.stringify(req).includes('shows.Get')) {
  //     return HttpResponse.json(allResults);
  //   }

  //   if (JSON.stringify(req).includes('shows.Count')) {
  //     return HttpResponse.json(totalResult);
  //   }

  //   return HttpResponse.json();
  // })
);
