import { gql } from '@apollo/client';

export const GET_ARTISTS = gql`
  query search($query: String!) {
    search {
      artists(query: $query) {
        nodes {
          id
          name
          mbid
          discogs {
            images {
              url
            }
          }        
        }
      }
    }
  }
`;

export const GET_ARTIST = gql`
  query Artist($mbid: MBID!) {
    lookup {
      artist(mbid: $mbid) {
        name
        id
        mbid
        country
        aliases {
          name
        }
        lastFM {
          biography {
            contentHTML
          }
          topTracks(first: 5) {
            nodes {
              title
              playCount
            }
          }
          similarArtists(first: 5) {
            nodes {
              name,
              mbid
            }
          }
        }
        discogs {
          images {
            thumbnail
            url
            height
            width
          }
        }
      }
    }
  }
`;
