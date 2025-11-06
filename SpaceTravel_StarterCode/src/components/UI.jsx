export function ButtonPrimary({ children, ...props }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white transition"
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonSecondary({ children, ...props }) {
  return (
    <button
      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white transition"
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonDanger({ children, ...props }) {
  return (
    <button
      className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white transition"
      {...props}
    >
      {children}
    </button>
  );
}
