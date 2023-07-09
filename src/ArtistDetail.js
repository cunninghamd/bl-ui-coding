export function ArtistDetail(props) {
    const {label, content} = props;
    
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col col-md-4 offset-md-4 text-center">
                <strong>{ label }: </strong>
                { content }
            </div>
        </div>
    );
}
