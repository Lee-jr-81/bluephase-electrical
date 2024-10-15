export default function ColouredLine({ colour }) {
  return (
    <hr
      style={{
        color: colour,
        backgroundColor: colour,
        borderColor: colour,
        height: 4,
      }}
    ></hr>
  );
}
