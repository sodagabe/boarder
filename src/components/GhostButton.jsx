function GhostButton({ label, handler }) {
  return (
    <button
      className="text-primary-500 hover:text-primary-600 active:text-primary-700 w-fit cursor-pointer font-bold underline decoration-2 underline-offset-3"
      onClick={handler}
    >
      {label}
    </button>
  );
}

export default GhostButton;
