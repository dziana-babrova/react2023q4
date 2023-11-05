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

export type ApiResponse = {
  result: Show[];
  jsonrpc: string;
};
