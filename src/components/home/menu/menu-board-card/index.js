export default function MenuBoardItem({ item }) {
  return (
    <div
      className="rounded-xl p-4 h-40"
      style={{ backgroundColor: item?.color }}
    >
      <div>
        <h1>{item?.name}</h1>
        <p>{item?.description}</p>
        <p>{item?.shopName}</p>
        <p className="mt-4">{item?.price}</p>
      </div>
    </div>
  );
}
