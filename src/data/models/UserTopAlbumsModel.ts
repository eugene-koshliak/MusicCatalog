enum EImageSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRALARGE = 'extralarge',
}

export interface IUserTopAlbumsDto {
  topalbums: {
    album: {
      artist: {
        url: string;
        name: string;
        mbid: string;
      };
      image: {
        size: EImageSize;
        ['#text']: string;
      }[];
      mbid: string;
      url: string;
      playcount: number;
      name: string;
    }[];
  };
}

export interface IUserTopAlbum {
  artist: {
    url: string;
    name: string;
  };
  imageUrl: string;
  url: string;
  playCount: number;
  name: string;
}

export const mapUserTopAlbums = (
  userTopAlbumsDto: IUserTopAlbumsDto,
): IUserTopAlbum[] => {
  return userTopAlbumsDto.topalbums.album.map(album => ({
    artist: {
      url: album.artist.url,
      name: album.artist.name,
    },
    imageUrl:
      album.image.find(item => item.size === EImageSize.MEDIUM)?.['#text'] ??
      '',
    url: album.url,
    playCount: album.playcount,
    id: album.mbid,
    name: album.name,
  }));
};
