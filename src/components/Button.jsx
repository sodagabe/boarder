function Button({ label, handler, fullWidth = false }) {
  return (
    <button
      className={`w-fit rounded-lg bg-black p-3 font-medium text-white ${fullWidth && "w-full"}`}
      onClick={handler}
    >
      {label}
    </button>
  );
}

export default Button;
