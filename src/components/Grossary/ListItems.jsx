

const ListItems = ({foodItems}) => {
    return (
        <>
            <div className="list pb-10">
                <ul className="list-group">
                {foodItems.map((item,key) => (
                    
                    <li className="list-group-item" key={key}>
                        <span>{item}</span>
                    </li>
                
                ))}
                </ul>
            </div>
        </>
    );
}

export default ListItems;