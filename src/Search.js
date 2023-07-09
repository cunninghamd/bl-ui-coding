import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_ARTISTS } from './queries';
import { ArtistSummary } from './ArtistSummary';
import { MusicHeader } from './MusicHeader';

export function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [queryTerm, setQueryTerm] = useState('');
    
    const { loading, error, data } = useQuery(GET_ARTISTS, {
        variables: { query: queryTerm },
    });
    
    function searchChange(event) {
        setSearchTerm(event.target.value);
    }
    
    function doSearch(event) {
        event.preventDefault();
        setQueryTerm(searchTerm);
    }
    
    const artists = [];
    if (data && data.search && data.search.artists) {
        data.search.artists.nodes.map((artist) => {
            let imageUrl = undefined;
            if (artist && artist.discogs && artist.discogs.images.length > 0 && artist.discogs.images[0].url) {
                imageUrl = artist.discogs.images[0].url;
            }
            
            artists.push(
                <ArtistSummary key={ artist.id } id={ artist.id } name={ artist.name } mbid={ artist.mbid } imageUrl={ imageUrl } />
            );
        });
    }
    
    return (
        <>
            <MusicHeader 
                link="/"
                icon="music" 
                pageTitle="Musicly - Search for an Artist"
                blurbTitle="About Musicly"
                blurb="Musicly is an amazing new service that allows you to search for your favorite artists, learn about their top tracks and find similar artists."
            />
            
            <main>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col col-md-8 offset-md-2 text-center">
                            <form className="mb-3 mb-lg-0 me-lg-3" role="search" onSubmit={ doSearch }>
                              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search for an artist..." aria-label="Search" 
                                onChange={ searchChange } />
                              <button type="button" className="btn btn-success me-2 mt-2"
                                onClick={ doSearch }
                              >
                                Search
                              </button>
                            </form>
                        </div>
                    </div>
                </div>
                
                { searchTerm && loading &&
                    <div className="container">
                        <span>loading search results...</span>
                    </div>
                }
                
                { searchTerm && !loading &&
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            { artists }
                        </div>
                    </div>
                }
            </main>
        </>
    );   
}
