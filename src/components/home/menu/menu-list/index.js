export default function MenuList({ menus, selectedTab, onClickMenu }) {
  return (
    <div className="h-5/6 overflow-y-scroll">
      <nav className="flex flex-col gap-4">
        {menus
          .filter((menu) => menu.tabId === selectedTab)
          .map((menu) => (
            <button
              key={menu.id}
              className="w-full p-4 px-6 border-b divide-y-2 border-gray-200 text-left"
              onClick={() => {
                onClickMenu(menu.id);
              }}
            >
              <div>
                <p className="text-lg">{menu?.name}</p>
                <p>{menu?.description}</p>
                <p className="mt-4">{menu?.price} 원</p>
              </div>
            </button>
          ))}
      </nav>
    </div>
  );
}
