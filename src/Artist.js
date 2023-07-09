import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { GET_ARTIST } from './queries';
import { ArtistDetail } from './ArtistDetail';
import { ArtistList } from './ArtistList';
import { MusicHeader  } from './MusicHeader';
import { Link } from "react-router-dom";

export function Artist() {
    const { mbid } = useParams();
    const { loading, error, data } = useQuery(GET_ARTIST, {
        variables: { mbid: mbid },
    });
    
    let artist = undefined;
    if (data && data.lookup && data.lookup.artist) {
        artist = data.lookup.artist;
    }
    
    let imageUrl = undefined;
    const aliases = [];
    const topTracks = [];
    const similarArtists = [];
    let artistBio = "";
    
    if (artist) {
        if (artist.discogs && artist.discogs.images.length > 0 && artist.discogs.images[0].url) {
            imageUrl = artist.discogs.images[0].url;
        }
        
        artist.aliases.map((alias) => {
            if (alias.name != artist.name) {
                aliases.push(alias.name);
            }
        });
        
        if (artist.lastFM) {
            if (artist.lastFM.biography && artist.lastFM.biography.contentHTML) {
                artistBio = artist.lastFM.biography.contentHTML;
            }
            else {
                artistBio = `${ artist.name } is a band from (the) ${ artist.country }.`;
            }
            
            if (artist.lastFM.topTracks) {
                artist.lastFM.topTracks.nodes.map((track) => {
                    topTracks.push(<li>{ track.title } <strong>({ track.playCount })</strong></li>);
                });
            }
            
            if (artist.lastFM.similarArtists) {
                artist.lastFM.similarArtists.nodes.map((similarArtist) => {
                    similarArtists.push(
                        <li>
                            <Link to={ `/artist/${similarArtist.mbid}` }>
                                { similarArtist.name }
                            </Link>
                        </li>
                    );
                });
            }
        }
    }
    
    const topTracksList = <ul>{ topTracks }</ul>;
    const similarArtistsList = <ul>{ similarArtists }</ul>;
    
    return (
        <>
            { !artist &&
                <>
                    <MusicHeader 
                        link="/"
                        icon="music" 
                        pageTitle="Musicly - Search for an Artist"
                        blurbTitle="About Musicly"
                        blurb="Musicly is an amazing new service that allows you to search for your favorite artists, learn about their top tracks and find similar artists."
                    />
                    <div className="container">
                        { loading &&
                            <p>Loading...</p>
                        }
                        { !loading &&
                            <p>Artist not found</p>
                        }
                    </div>
                </>
            }
            { artist && 
                <>
                    <MusicHeader 
                        link={ `/artist/${ artist.mbid }` }
                        icon="music" 
                        pageTitle={ artist.name }
                        blurbTitle={ `About the Band: ${ artist.name }` }
                        blurb={ artistBio }
                        largeBlurb={ true }
                    />
                    
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-4">
                            <div className="col">
                                <Link to="/"><i className="fa fa-search"></i> New Search</Link>
                            </div>
                        </div>
                        
                        { !imageUrl &&
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#d9d9d9"/></svg>
                                </div>
                            </div>
                        }
                        { imageUrl &&
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col col-md-4 offset-md-4">
                                    <img className="card-img-top img-thumbnail" style={{ objectFit: "contain" }} width="100%" height="225" src={ imageUrl } />
                                </div>
                            </div>
                        }
                        
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
                            <div className="col col-md-4 offset-md-4 text-center">
                                <h3>{ artist.name }</h3>
                            </div>
                        </div>
                        
                        <ArtistDetail label="Alias(es)" content={ aliases.join(', ') } />
                        <ArtistDetail label="Country" content={ artist.country } />
                        
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
                            <ArtistList label="Top Tracks" content={ topTracksList } cols="3" offset="2" />
                            <ArtistList label="Similar Artists" content={ similarArtistsList } cols="3" offset="2" />
                        </div>
                    </div>
                </>
            }
        </>
    );
}
