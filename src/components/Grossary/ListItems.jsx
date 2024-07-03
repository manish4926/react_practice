

const ListItems = ({foodItems}) => {
    return (
        <>
            <div className="list pb-10">
            {foodItems.map((item,key) => (
                
                <div key={key}>
                    <span>{item}</span>
                </div>
               
            ))}
            </div>
        </>
    );
}

export default ListItems;