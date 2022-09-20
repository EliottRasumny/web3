import logoSrc from 'components/Header/LOGO HE VINCI.png'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}<img src={logoSrc} alt="Logo of HE Vinci"></img></h1>
        </div>
    )
}

export default Header