export function ArtistList(props) {
    const { label, content, cols, offset } = props;
    
    let className = "col";
    if (cols) {
        className += ` col-md-${cols}`;
    }
    if (offset) {
        className += ` offset-md-${offset}`;
    }
    
    return (
        <div className={ className }>
            <h5>{ label }</h5>
            { content }
        </div>
    );
}
