function CategoryList({ categories, mapFunction }) {
  return (
    <aside className="flex flex-col gap-4">{categories.map(mapFunction)}</aside>
  );
}

export default CategoryList;
