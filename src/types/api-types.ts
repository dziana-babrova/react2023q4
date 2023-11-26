export type Show = {
  id: number;
  title: string;
  titleOriginal: string;
  status: string;
  totalSeasons: number;
  year: number;
  watching: number;
  voted: number;
  rating: number;
  images: string[];
  image: string;
  onlineCount: number | null;
  promoUrl: string | null;
  category: string;
};

export type ApiResponse<T> = {
  result: T;
  jsonrpc: string;
  id: number;
};

export type SingleShowApiResponse = {
  jsonrpc: string;
  result: {
    id: number;
    title: string;
    titleOriginal: string;
    description: string;
    totalSeasons: number;
    status: string;
    country: string;
    countryTitle: string;
    started: string;
    ended: string;
    year: number;
    kinopoiskId: number | null;
    kinopoiskRating: number | null;
    kinopoiskVoted: number | null;
    kinopoiskUrl: string | null;
    tvrageId: number;
    imdbId: string | null;
    imdbRating: number | null;
    imdbVoted: number | null;
    imdbUrl: string | null;
    watching: number;
    watchingTotal: number;
    voted: number;
    rating: number;
    runtime: number;
    runtimeTotal: string;
    images: string[];
    image: string;
    genreIds: number[];
    network: {
      id: number;
      title: string;
      country: string;
    };
    onlineLinks:
      | [
          {
            title: string;
            description: string;
            source: string;
            url: string;
          }
        ]
      | [];
    onlineLinkExclusive: {
      title: string;
      description: string;
      source: string;
      url: string;
    } | null;
  };
  id: number;
};
