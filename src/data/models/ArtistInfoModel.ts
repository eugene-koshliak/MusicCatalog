import {EImageSize} from './TopAlbumsModel';

export interface IArtistInfoDto {
  artist: {
    name: string;
    mbid: string;
    url: string;
    image: {
      size: EImageSize;
      ['#text']: string;
    }[];
    streamable: string;
    ontour: string;
    stats: {
      listeners: string;
      playcount: string;
    };
    similar: {
      artist: {
        name: string;
        url: string;
        image: {
          ['#text']: string;
          size: EImageSize;
        }[];
      }[];
    };
    tags: {
      tag: {
        name: string;
        url: string;
      }[];
    };
    bio: {
      links: {
        link: {
          ['#text']: string;
          rel: string;
          href: string;
        };
      };
      published: string;
      summary: string;
      content: string;
    };
  };
}

export interface IArtistInfo {
  name: string;
  imageUrl: string;
  url: string;
  listeners: string;
  playCount: string;
  bio: {
    published: string;
    summary: string;
    content: string;
  };
}

export const mapArtistInfo = (artistInfoDto: IArtistInfoDto): IArtistInfo => {
  return {
    name: artistInfoDto.artist.name,
    imageUrl:
      artistInfoDto.artist.image.find(item => item.size === EImageSize.LARGE)?.[
        '#text'
      ] ?? '',
    url: artistInfoDto.artist.url,
    listeners: artistInfoDto.artist.stats.listeners,
    playCount: artistInfoDto.artist.stats.playcount,
    bio: {
      published: artistInfoDto.artist.bio.published,
      summary: artistInfoDto.artist.bio.summary,
      content: artistInfoDto.artist.bio.content,
    },
  };
};
