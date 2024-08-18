import {useInfiniteQuery} from '@tanstack/react-query';

import api, {API_KEY} from '../api';
import {AxiosError} from 'axios';
import {ITopAlbum, ITopAlbumsDto, mapTopAlbum} from '../models/TopAlbumsModel';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

type DataWithPage = {data: ITopAlbum[]; nextPage: number};

const useGetUserTopAlbums = (pageSize: number) => {
  const {userLogin} = useContext(AuthContext);

  const fetchAlbums = async ({pageParam = 1}) => {
    const response = await api.get<ITopAlbumsDto>('', {
      params: {
        method: 'user.gettopalbums',
        user: userLogin,
        api_key: API_KEY,
        format: 'json',
        limit: pageSize,
      },
    });

    return {
      data: mapTopAlbum(response.data),
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
  } = useInfiniteQuery<DataWithPage, ITopAlbum, AxiosError>({
    queryKey: [pageSize, userLogin],
    queryFn: fetchAlbums,
    getNextPageParam: lastPage => {
      if (lastPage.data.length < pageSize) {
        return undefined;
      }
      return lastPage.nextPage;
    },
    enabled: !!userLogin,
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
