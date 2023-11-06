export type Show = {
  id: number;
  title: string;
  titleOriginal: string;
  status: string;
  totalSeasons: 3;
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
};

export type SingleShowApiResponse = {
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
    kinopoiskId: number;
    kinopoiskRating: number;
    kinopoiskVoted: number;
    kinopoiskUrl: string;
    tvrageId: number;
    imdbId: string;
    imdbRating: number;
    imdbVoted: number;
    imdbUrl: string;
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
    onlineLinks: [
      {
        title: string;
        description: string;
        source: string;
        url: string;
      }
    ];
    onlineLinkExclusive: {
      title: string;
      description: string;
      source: string;
      url: string;
    };
  };
  id: number;
};
