import { NavLink } from "react-router";

function Category({ category }) {
  return (
    <NavLink to={`/category/${category.id}`} className="p-2">
      {category.name}
    </NavLink>
  );
}

export default Category;
