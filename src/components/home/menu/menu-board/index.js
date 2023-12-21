import MenuBoardItem from "@/components/home/menu/menu-board-card";

export default function MenuBoard({ menus }) {
  return (
    <div className="h-5/6 overflow-y-scroll">
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-200 ">
        {menus?.map((menu) => (
          <MenuBoardItem key={menu.id} item={menu} />
        ))}
      </div>
    </div>
  );
}
