const Total = (props) =>{
    return(
        <div>
            <p>Number of exercises {props.parts[0][1] + props.parts[1][1] + props.parts[2][1]}</p>
        </div>
    )
}

export default Total