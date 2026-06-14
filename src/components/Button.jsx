function Button({ label, handler }) {
  return (
    <button
      className="w-fit rounded-lg bg-black p-3 font-medium text-white"
      onClick={handler}
    >
      {label}
    </button>
  );
}

export default Button;
