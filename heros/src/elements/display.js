const Disp = () => {
    return (<div className="disp-div">
        <h2>Top Heros</h2>
        <div className="disp-a">
            <a href="">Hero 1</a>
            <a href="">Hero 2</a>
            <a href="">Hero 3</a>
            <a href="">Hero 4</a>
        </div>
        <div className="disp-srch">
            <form action="" method="post">
                <input type="text" name="name" id="srch" />
                <input type="submit" value="Hero-Name" id="submit"/>
            </form>
        </div>
    </div>);
}

export default Disp;