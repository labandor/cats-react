import { Link } from "react-router-dom";

function Cat({cat}) {
  console.log(cat)
  return (
    <div>
      <Link to={`/cats/${cat._id}`}>
        <img className="cat-images" src={cat.image} alt={cat.name} />
      </Link>
    </div>
  );
}

export default Cat;
