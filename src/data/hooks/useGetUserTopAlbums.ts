import {useInfiniteQuery} from '@tanstack/react-query';

import api, {API_KEY} from '../api';
import {AxiosError} from 'axios';
import {
  IUserTopAlbum,
  IUserTopAlbumsDto,
  mapUserTopAlbums,
} from '../models/UserTopAlbumsModel';

type DataWithPage = {data: IUserTopAlbum[]; nextPage: number};

const useGetUserTopAlbums = (pageSize: number) => {
  const fetchAlbums = async ({pageParam = 1}) => {
    const response = await api.get<IUserTopAlbumsDto>('', {
      params: {
        method: 'user.gettopalbums',
        user: 'yevhen_koshliak',
        api_key: API_KEY,
        format: 'json',
        limit: pageSize,
      },
    });

    return {
      data: mapUserTopAlbums(response.data),
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
  } = useInfiniteQuery<DataWithPage, IUserTopAlbum, AxiosError>({
    queryKey: [],
    queryFn: fetchAlbums,
    getNextPageParam: lastPage => {
      if (lastPage.data.length < pageSize) {
        return undefined;
      }
      return lastPage.nextPage;
    },
  });

  const flatData = data?.pages.map(p => p.data).flat();

  return {
    data: flatData,
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
