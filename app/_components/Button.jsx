export default function Button({ name, bg, textColour, border }) {
  return (
    <button
      className={`${bg} rounded-md p-2 ${textColour} font-medium ${border} hover:scale-105 transition ease-in-out duration-300`}
    >
      {name}
    </button>
  );
}
