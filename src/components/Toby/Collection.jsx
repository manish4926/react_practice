import CollectionItem from "components/Toby/CollectionItem";

const Collection = () => {
    return (
        <>
            <div className="col-md-3">
                Spaces (Collection Set)
            </div>
            <div className="col-md-9">
                Collection Detail:	Name	ID (Cards)
                <CollectionItem></CollectionItem>
            </div>
        
        </>
    )
}

export default Collection