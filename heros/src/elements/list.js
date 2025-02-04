// import { useState } from "react";
// import { Link } from "react-router-dom";

// const List = () => {
//     const [heros, setHero] = useState([
//         {"id": 12, "name": "Dr. Nice"},
//         {"id": 13, "name": "Bombasto"},
//         {"id": 15, "name": "Magneta"},
//         {"id": 16, "name": "RubberMan"},
//         {"id": 17, "name": "Dynama"},
//         {"id": 18, "name": "Dr. IQ"},
//         {"id": 19, "name": "Magma"},
//         {"id": 20, "name": "Tornado"}
//     ]);


//     const del = (id) => {
//         setHero(heros.filter((hero) => hero.id === id));
//     }

//     return ( 
//         <div className="list-div">
//             <h2>My Heros</h2>
//             <form action="" method="post">
//                 <label htmlFor="adding">Hero Name</label>
//                 <input type="text" name="adding" id=""/>
//                 <input type="submit" value="Add Hero" className="link" style={{border: 'none'}}/>
//             </form>
//             <div className="hero-list">
//                 {heros.map((hero) => (
//                     <Link to={'detail/${hero.name}'} className="lst">
//                     <p className="idx">{hero.id}</p>
//                     <p className="nmg">{hero.name}</p>
//                     <button
//                       className="link"
//                       style={{ border: 'none', padding: '10px' }}
//                       onClick={() => del(hero.id)}
//                     >
//                       x
//                     </button>

//                 </Link>
//                 ))}
                
                
//             </div>
//         </div>
//      );
// }

 
// export default List;
import { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
    const [heros, setHero] = useState([
        { id: 12, name: "Dr. Nice" },
        { id: 13, name: "Bombasto" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "RubberMan" },
        { id: 17, name: "Dynama" },
        { id: 18, name: "Dr. IQ" },
        { id: 19, name: "Magma" },
        { id: 20, name: "Tornado" },
    ]);

    const del = (id) => {
        setHero(heros.filter((hero) => hero.id !== id)); 
    };

    return (
        <div className="list-div">
            <h2>My Heros</h2>
            <form action="" method="post">
                <label htmlFor="adding">Hero Name</label>
                <input type="text" name="adding" id="" />
                <input
                    type="submit"
                    value="Add Hero"
                    className="link"
                    style={{ border: "none" }}
                />
            </form>
            <div className="hero-list">
                {heros.map((hero) => (
                    <div key={hero.id} className="hero-item">
                    <div className="lst">
                        <Link to={`detail/${hero.name}`} className="lst" style={{border: 'none'}}>
                            <p className="idx">{hero.id}</p>
                            <p className="nmg">{hero.name}</p>
                        </Link>
                        <button
                            className="link"
                            style={{ border: "none", padding: "10px" }}
                            onClick={(e) => {
                                e.preventDefault();
                                del(hero.id); 
                            }}
                        >
                            x
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
