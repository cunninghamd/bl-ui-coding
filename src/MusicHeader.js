import { useState } from 'react';

export function MusicHeader(props) {
    const { link, icon, pageTitle, blurbTitle, blurb, largeBlurb } = props;
    
    const iconClass = `fa fa-${ icon }`;
    
    const [showMore, setShowMore] = useState(false);
    
    const moreButton = (
        <button type="button" className="btn btn-link ml-2" onClick={ () => setShowMore(!showMore) }>
            { showMore ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
            &nbsp;
            { showMore ? "hide more" : "show more" }
        </button>
    );
    
    let pBlurb = (
        <>
            <p className="text-body-secondary" style={{
                maxHeight: "210px",
                overflow: "hidden",
            }}>
                { blurb }
            </p>
            { largeBlurb && moreButton }
        </>
    );
    
    if (showMore) {
        pBlurb = (
            <>
                <p className="text-body-secondary">{ blurb }</p>
                { largeBlurb && moreButton }
            </>
        );
    }
    
    return (
        <header data-bs-theme="dark" className="mb-4">
          <div className="collapse text-bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4>{ blurbTitle }</h4>
                  { pBlurb }
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark shadow-sm" style={{ backgroundColor: "#5246AE" }}>
            <div className="container">
                <a href={ link } className="navbar-brand d-flex align-items-center">
                    <i className={ iconClass } aria-hidden="true"></i>
                    &nbsp;
                    <strong>{ pageTitle }</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
          </div>
        </header>
    );
}
