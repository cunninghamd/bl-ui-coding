import { Link } from "react-router-dom";

export function ArtistSummary(props) {
    const { id, name, mbid, imageUrl } = props;
    
    const hasImage = imageUrl !== undefined;
        
        console.log("mbid: %s", id);

    return (
        <div className="col" key={ id }>
          <Link to={`artist/${mbid}`} className="text-secondary" style={{ textDecoration: "none" }}>
              <div className="card shadow-sm">
                { hasImage &&
                    <img className="card-img-top" style={{ objectFit: "contain" }} width="100%" height="225" src={ imageUrl } />
                }
                { !hasImage &&
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#d9d9d9"/></svg>
                }
                <div className="card-body">
                  <h5 className="card-title ">{ name }</h5>
                </div>
              </div>
          </Link>
        </div>
    );
}
