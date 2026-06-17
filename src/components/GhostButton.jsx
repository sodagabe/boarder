function GhostButton({ label, handler }) {
  return (
    <button
      className="under w-fit cursor-pointer py-3 font-bold underline decoration-2 underline-offset-3"
      onClick={handler}
    >
      {label}
    </button>
  );
}

export default GhostButton;
