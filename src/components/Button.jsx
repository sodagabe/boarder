function Button({ label, handler, fullWidth = false, form = "" }) {
  return (
    <button
      className={`${!fullWidth && "w-fit"} bg-primary-500 hover:bg-primary-600 active:bg-primary-700 focus:outline-secondary-300 rounded-lg p-3 font-semibold text-white transition-colors focus:outline-4`}
      onClick={handler}
      form={form}
    >
      {label}
    </button>
  );
}

export default Button;
