export default function Avatar({ src, big, onChange, editable = false }) {
  const widthClass = big ? "w-24" : "w-12";

  return (
    <div className="rounded-full overflow-hidden">
      <img src={src} />
    </div>
  );
}
