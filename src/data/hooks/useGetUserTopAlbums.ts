import {useInfiniteQuery} from '@tanstack/react-query';

import api, {API_KEY} from '../api';
import {AxiosError} from 'axios';

type DataWithPage = {data: any[]; nextPage: number};

const useGetUserTopAlbums = (pageSize: number) => {
  const fetchAlbums = async ({pageParam = 1}) => {
    const response = await api.get('', {
      params: {
        method: 'user.gettopalbums',
        user: 'yevhen_koshliak',
        api_key: API_KEY,
        format: 'json',
        limit: pageSize,
      },
    });

    return {
      data: response ?? [],
      nextPage: pageParam + 1,
    };
  };

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
    refetch,
  } = useInfiniteQuery<DataWithPage, AxiosError>({
    queryKey: [],
    queryFn: fetchAlbums,
    getNextPageParam: lastPage => {
      if (lastPage.data.length < pageSize) {
        return undefined;
      }
      return lastPage.nextPage;
    },
  });

  return {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
    refetch,
  };
};

export default useGetUserTopAlbums;
