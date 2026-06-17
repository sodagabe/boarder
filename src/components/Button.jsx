function Button({ label, handler, fullWidth = false }) {
  return (
    <button
      className={`${!fullWidth && "w-fit"} rounded-lg bg-black p-3 font-medium text-white`}
      onClick={handler}
    >
      {label}
    </button>
  );
}

export default Button;
