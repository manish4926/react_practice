const AddGrossary = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-xs-9">
                        <input className="form-control" type="text" placeholder="Add New Item" />
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <button className="btn btn-danger mb-2" type="button" >Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddGrossary;