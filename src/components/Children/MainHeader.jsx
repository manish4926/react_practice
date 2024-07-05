const MainHeader = (props) => {
    return (
    <>
        <div className="container-fluid-2 parentHeader">
            <div className="row">
                <div className="col">
                    Icon
                </div>
                <div className="col">
                    <h3>Main Header</h3>
                        
                </div>
            </div>
        </div>
        {props.children}
    </>
    );
}

export default MainHeader;


