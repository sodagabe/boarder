function CategoryList({ categories, mapFunction }) {
  return (
    <aside className="flex max-h-screen w-1/5 flex-col overflow-scroll">
      {categories.map(mapFunction)}
    </aside>
  );
}

export default CategoryList;
