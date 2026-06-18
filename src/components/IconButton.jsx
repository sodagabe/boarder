function IconButton({ icon, handler }) {
  return (
    <button
      className={
        "hover:bg-primary-100 active:bg-primary-200 focus:outline-secondary-300 text-primary-500 outline-primary-500 rounded-lg p-2 font-semibold outline-2 transition-colors focus:outline-4"
      }
      onClick={handler}
    >
      {icon}
    </button>
  );
}

export default IconButton;
