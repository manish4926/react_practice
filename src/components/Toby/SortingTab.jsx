import { ShadowCard } from "components/Children/Cards"

const Sorting = () => {
    return (
        <>
        <div className="container">
            <ShadowCard>
                <div className="col-md-3"><span>Sort By:</span></div>
                <div className="col-md-3">
                    <button>Priority |icon|</button>
                    <button>Alphabet A-Z|icon|</button>
                    <button>Latest Added/ First Added |icon|</button>
                </div>
            </ShadowCard>
        </div>
        Sort By: Priority, Alphabet, Latest Added, First Added
        </>
    )
}

export default Sorting