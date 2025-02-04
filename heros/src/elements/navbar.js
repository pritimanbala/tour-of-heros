import {Link} from 'react-router-dom'

const Navb = () => {
    return (
        <>
            <div className="nav-cont">
                <h1>Tour of Heros</h1>
                <div className="nav-div">
                    <Link className="link"to="/">Dashboard</Link>
                    <Link className="link"to="/heros">Heros</Link>
                </div>
            </div>
        </>
    );
}

export default Navb;