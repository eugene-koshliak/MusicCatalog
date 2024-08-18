import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';

import {AxiosError} from 'axios';
import api, {API_KEY} from '../api';
import {
  IAlbumDetails,
  IAlbumDetailsDto,
  mapAlbumDetails,
} from '../models/AlbumDetailsModel';

const useGetAlbumDetails = (artistName: string, albumName: string) => {
  const {data, isLoading, error, refetch} = useQuery<IAlbumDetails, AxiosError>(
    {
      queryKey: [artistName, albumName],
      queryFn: () =>
        api
          .get<IAlbumDetailsDto>('', {
            params: {
              method: 'album.getinfo',
              api_key: API_KEY,
              artist: artistName,
              album: albumName,
              format: 'json',
            },
          })
          .then(response => {
            return mapAlbumDetails(response.data);
          }),
    },
  );

  const parsedError: string | undefined | null =
    error?.response?.data?.error?.message ?? error?.message;

  useEffect(() => {
    if (parsedError) {
      console.log(`Error: useGetAlbumDetails - ${parsedError}`);
    }
  }, [parsedError]);

  return {isLoading, error, data, refetch};
};

export default useGetAlbumDetails;
