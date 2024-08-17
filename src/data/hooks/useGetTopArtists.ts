import {useInfiniteQuery} from '@tanstack/react-query';

import api, {API_KEY} from '../api';
import {AxiosError} from 'axios';

type DataWithPage = {data: any[]; nextPage: number};

const useGetTopArtists = (pageSize: number) => {
  const fetchArtists = async ({pageParam = 1}) => {
    const response = await api.get('', {
      params: {
        method: 'chart.gettopartists',
        api_key: API_KEY,
        format: 'json',
        page: pageSize,
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
    queryFn: fetchArtists,
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

export default useGetTopArtists;
