import { useGetShowQuery } from 'store-manager/slices/api-slice';
import { useSelector } from 'react-redux';
import { RootState } from 'store-manager/store';
import { ShowsState } from 'store-manager/slices/shows-slice';
import { useParams } from 'react-router-dom';

export const useDetailedInfo = () => {
  const { id } = useParams();
  const { data } = useGetShowQuery(id || '');
  const { loading, error } = useSelector<RootState, ShowsState>(
    (state) => state.show
  );
  return { data, loading, error };
};
