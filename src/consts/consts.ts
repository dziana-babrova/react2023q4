export const SEARCH_TERM = 'search_react2023q4_dziana_babrova';

export const URL_SEARCH_PARAMS = {
  limit_per_page: {
    name: 'limit',
    default_value: '12',
    initial_value: '0',
    options: {
      option1: '8',
      option2: '12',
      option3: '16',
      option4: '20',
      option5: '24',
      option6: '28',
      option7: '32',
    },
  },
  search_query: {
    name: 'search',
    default_value: '',
  },
  page: {
    name: 'page',
    default_value: '1',
  },
};

export const API_METHODS = {
  all_shows: 'shows.Get',
  count: 'shows.Count',
  single_show: 'shows.GetById',
};
