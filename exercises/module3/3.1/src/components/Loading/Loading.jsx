
const Loading = ({isLoading, loadAfter3}) => {
    if (isLoading){
        loadAfter3()
        return(
            <p>The component is loading ...</p>
        )
    }

    return(
        <p>The component is loaded !!!</p>
    )
}

export default Loading;