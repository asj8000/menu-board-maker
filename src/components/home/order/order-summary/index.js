import formatNumberWithCommas from "@/utils/format-number-with-commas";

export default function OrderSummary({ orders }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">주문</h2>
      <div className="mt-4 gap-6 flex flex-col">
        {orders
          ? orders.map((order) => {
              const parts = order?.parts;
              return (
                <div className="flex flex-col gap-2" key={order?.menuId}>
                  <div className="grid grid-cols-6 text-2xl">
                    <div className="col-span-3 ">{order?.name}</div>
                    <div className="text-center">{order?.count}</div>
                    <div className="col-span-2 text-right">
                      {formatNumberWithCommas(order?.price)}원
                    </div>
                  </div>
                  {parts && (
                    <div className="text-gray-400 text-base flex flex-col gap-1">
                      {parts?.map((part) => {
                        return (
                          <div className="grid grid-cols-6" key={part?.id}>
                            <div className="col-span-3">{part?.name}</div>
                            <div className="text-center">{part?.count}</div>
                            <div className="col-span-2 text-right">
                              {formatNumberWithCommas(part?.price)}원
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          : undefined}
      </div>
    </div>
  );
}
