import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';

import {AxiosError} from 'axios';
import api, {API_KEY} from '../api';

import {
  IArtistInfo,
  IArtistInfoDto,
  mapArtistInfo,
} from '../models/ArtistInfoModel';

const useGetArtistInfo = (artistName: string) => {
  const {data, isLoading, error, refetch} = useQuery<IArtistInfo, AxiosError>({
    queryKey: [artistName],
    queryFn: () =>
      api
        .get<IArtistInfoDto>('', {
          params: {
            method: 'artist.getinfo',
            api_key: API_KEY,
            artist: artistName,
            format: 'json',
          },
        })
        .then(response => {
          return mapArtistInfo(response.data);
        }),
  });

  const parsedError: string | undefined | null =
    error?.response?.data?.error?.message ?? error?.message;

  useEffect(() => {
    if (parsedError) {
      console.log(`Error: useGetArtistInfo - ${parsedError}`);
    }
  }, [parsedError]);

  return {isLoading, error, data, refetch};
};

export default useGetArtistInfo;
