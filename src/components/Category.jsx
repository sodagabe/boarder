import { NavLink } from "react-router";

function Category({ category }) {
  return (
    <div>
      <NavLink>{category.name}</NavLink>
    </div>
  );
}

export default Category;
