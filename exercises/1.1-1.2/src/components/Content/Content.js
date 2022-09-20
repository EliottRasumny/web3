import Part from "../Part/Part"

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts[0][0]} exercises={props.parts[0][1]}></Part>
            <Part name={props.parts[1][0]} exercises={props.parts[1][1]}></Part>
            <Part name={props.parts[2][0]} exercises={props.parts[2][1]}></Part>
        </div>
    )
}

export default Content