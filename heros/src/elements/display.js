import { Link } from "react-router-dom";

const Disp = () => {
    return (<div className="disp-div">
        <h2>Top Heros</h2>
        <div className="disp-a">
            <Link to="/detail/Bombasto">Bombasto</Link>
            <Link to="/detail/Celeritas">Celeritas</Link>
            <Link to="/detail/Magneta">Magneta</Link>
            <Link to="/detail/RubberMan">RubberMan</Link>
        </div>
        <div className="disp-srch">
            <form action="" method="post">
                <input type="text" name="name" id="srch" style={{backgroundColor: 'transparent', borderRadius: '5px'}}/>
                <input type="submit" value="Hero-Name" id="submit"/>
            </form>
        </div>
    </div>);
}

export default Disp;