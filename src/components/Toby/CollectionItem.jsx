const CollectionItem = ({list}) => {
    return (
        <>
            <div className="col-md-3">
                {list.map((item,key) => (
                    
                    <li className="list-group-item" key={key}>
                        <span>{item} List Bookmarks	Name	Priority	Type (Link, Note)	Icon	Description (Cards Col-3)</span>
                    </li>
                
                ))}
                
            </div>
            
        
        </>
    )
}

export default CollectionItem