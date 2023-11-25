import { URL_SEARCH_PARAMS } from '@/consts/consts';
import { GetServerSidePropsContext } from 'next';

type MainPageServerSideProps = {
  search: string;
  page: string;
  limit: string;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { search, page, limit } = context.query;
  const searchParam = search || URL_SEARCH_PARAMS.search_query.default_value;
  const pageParam = page || URL_SEARCH_PARAMS.page.default_value;
  const limitParam = limit || URL_SEARCH_PARAMS.limit_per_page.default_value;
  // const res = await fetch('https://api.github.com/repos/vercel/next.js');
  // const repo = await res.json();
  return { search: searchParam, page: pageParam, limit: limitParam };
};

const MainPage = ({ search, page, limit }: MainPageServerSideProps) => {
  console.log(search, page, limit);
  return <div>Main Page</div>;
};

export default MainPage;
