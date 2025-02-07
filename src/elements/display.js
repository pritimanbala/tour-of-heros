import { Link } from "react-router-dom";

const Disp = ({ hashira }) => {
  return (
    <div className="disp-div">
      <h2>Top Hashiras</h2>
      <div className="disp-a">
        {hashira
          .filter((hero) => hero.id < 5) 
          .map((hero) => (
            <Link key={hero.id} to={`/detail/${hero.id}`}>
              {hero.name} <img src={hero.img} alt={hero.name} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Disp;

