const MainHeader = (props) => {
    return (
    <>
        <div className="container-fluid parentHeader">
            <div className="row">
                <div className="col-3">
                    <div className="icon">
                        <i className="fa fa-th"></i>
                        <span>Manish Practice</span>
                    </div>
                </div>
            </div>
        </div>
        {props.children}
    </>
    );
}

export default MainHeader;


