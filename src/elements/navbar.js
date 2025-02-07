import {Link} from 'react-router-dom'

const Navb = ( ) => {
    return (
        <>
            <div className="nav-cont">
                <h1>Tour of Hashiras</h1>
                <div className="nav-div">
                    <Link className="link"to="/">Home</Link>
                    <Link className="link"to="/hashiras">Top Hashiras</Link>
                    <Link className="link"to="/heros">Slayer Corps</Link>
                </div>
            </div>
        </>
    );
}

export default Navb;