import { useDetailedInfo } from 'hooks/useDetailedInfo';
import './details.scss';

export const Details = () => {
  const [data] = useDetailedInfo();
  return <div className="details">{data?.result.title}</div>;
};
