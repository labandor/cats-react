import { Link } from "react-router-dom";

function Cat({cat}) {
  return (
    <div>
      <Link to={`/cats/${cat.id}`}>
        <img className="cat-images" src={cat.image} alt={cat.name} />
      </Link>
    </div>
  );
}

export default Cat;
