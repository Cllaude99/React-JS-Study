import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByKeyword } from '../../apis/NetflixClone';

const Search = () => {
  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const { data, isLoading } = useQuery({
    queryKey: ['searchKeyword', keyword],
    queryFn: () => searchMovieByKeyword(keyword!),
  });

  if (!isLoading) console.log('xxx', data);
  return null;
};

export default Search;
