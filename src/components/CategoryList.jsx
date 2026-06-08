function CategoryList({ categories, mapFunction }) {
  return <aside className="flex flex-col">{categories.map(mapFunction)}</aside>;
}

export default CategoryList;
