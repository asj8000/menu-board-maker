export default function MenuList({ menus, selectedTab }) {
  return (
    <div className="h-5/6 overflow-y-scroll">
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-200 ">
        {menus
          .filter((menu) => menu.menuId === selectedTab)
          .map((menu) => (
            <div
              key={menu.id}
              className="w-full p-4 px-6 border-b border-gray-200"
            >
              <div>
                <p>{menu.name}</p>
                <p className="mt-4">{menu.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
