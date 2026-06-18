import { NavLink } from "react-router";

function Category({ category }) {
  return (
    <NavLink
      to={`/category/${category.id}`}
      className="hover:text-secondary-700 active:text-secondary-800 category-link py-1 text-sm font-semibold"
    >
      {category.name}
    </NavLink>
  );
}

export default Category;
