import {Link, useParams} from "react-router-dom";

const Detail = () => {
    const{name} = useParams();
    return ( 
        <div className="dtl-div">
            <h2>{name} Details</h2>
            <div className="dtl-disp">
                <p>id: 13</p>
                <form action="" method="post">
                    <input type="text" name="name" id="dtl-txt" value={name} style={{backgroundColor:'transparent', padding: '5px' , borderRadius: '5px'}}/>
                    <div className="dtl-btn">
                        <Link className="link"to="/">Go Back</Link>
                        <input className="link" style={{border: 'none'}} type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Detail;