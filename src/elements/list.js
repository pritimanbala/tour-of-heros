
 

import { Link } from "react-router-dom";

const List =  ({ hashira }) => {
    return (
      <div className="disp-div">
        <h2>Welcome to Slayer Corps</h2>
        <div className="disp-a">
          {hashira.map((hero) => (
              <Link key={hero.id} to={`/detail/${hero.id}`}>
                {hero.name} <img src={hero.img} alt={hero.name} />
              </Link>
            ))}
        </div>
      </div>
    );
  };

export default List;
