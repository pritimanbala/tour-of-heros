const Detail = () => {
    return ( 
        <div className="dtl-div">
            <h2>BOMBASTO Details</h2>
            <div className="dtl-disp">
                <p>id: 13</p>
                <form action="" method="post">
                    <input type="text" name="name" id="dtl-txt" />
                    <div className="dtl-btn">
                        <button>Go Back</button>
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Detail;