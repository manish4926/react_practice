const BasicCard = (props) => {
    return (
        <>
        <div class="card" style="width: 18rem;">
            {props.children}
        </div>
        </>
    )
}

const ShadowCard = (props) => {
    return (
        <>
        <div class="card" style="width: 18rem;">
            {props.children}
        </div>
        </>
    )
}

export {BasicCard, ShadowCard};