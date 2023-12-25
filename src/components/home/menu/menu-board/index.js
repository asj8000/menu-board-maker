import formatNumberWithCommas from "src/utils/format-number-with-commas";

export default function MenuBoard({ menus, boardLayout }) {
  return (
    <div className="h-5/6 overflow-y-scroll bg-gray-200">
      <div className="grid grid-cols-5 gap-2.5 p-4 auto-rows-max">
        {boardLayout.map((item) => {
          const menuItem = menus.find((menu) => menu.id === item.menuId);

          return (
            <div
              className="rounded-xl p-4 h-40 flex flex-col justify-between"
              key={item.id}
              id={item.id}
              style={{
                gridColumn: `${item.x} / span ${item.col}`,
                gridRow: `${item.y} / span ${item.row}`,
                backgroundColor: item.color,
              }}
            >
              {menuItem ? (
                <>
                  <div>
                    <h1 className="font-bold text-base">{menuItem?.name}</h1>
                    <p className="font-medium text-xs">
                      {menuItem?.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    {formatNumberWithCommas(menuItem?.price)}원
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <p className="font-bold text-base">{item.id}비어있음</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
