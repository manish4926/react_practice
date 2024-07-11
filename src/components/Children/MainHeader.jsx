const MainHeader = (props) => {
    return (
    <>
        <div className="container-fluid-2 parentHeader">
            <div className="row">
                <div className="col-2">
                    <div className="icon">
                        <i className="fa fa-th"></i>
                        <span>Manish Practice</span>
                    </div>
                </div>
                <div className="col-10">
                    
                        
                </div>
            </div>
        </div>
        {props.children}
    </>
    );
}

export default MainHeader;


