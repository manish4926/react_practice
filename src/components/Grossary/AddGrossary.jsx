const AddGrossary = ({AddItemToList}) => {
    

    return (
        <div>
            <div className="container pb-4">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <input className="form-control" type="text" placeholder="Add New Item" onKeyDown={AddItemToList}/>
                    </div>
                    {/* <div className="col-md-3 col-xs-3">
                        <button className="btn btn-danger mb-2" type="button" onClick={AddItemToList}>Add Item</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AddGrossary;