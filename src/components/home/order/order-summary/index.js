export default function OrderSummary({ order }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">주문</h2>
      <div className="mt-4 gap-6 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-6 text-2xl">
            <div className="col-span-3 ">제거</div>
            <div className="text-center">1</div>
            <div className="col-span-2 text-right">6,000원</div>
          </div>
          <div className="text-gray-400 text-base flex flex-col gap-1">
            <div className="grid grid-cols-6 text-base">
              <div className="col-span-3">파츠 제거(1000원)</div>
              <div className="text-center">2</div>
              <div className="col-span-2 text-right">+2,000원</div>
            </div>
            <div className="grid grid-cols-6">
              <div className="col-span-3">컬러 제거(500원)</div>
              <div className="text-center">8</div>
              <div className="col-span-2 text-right">+4,000원</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p>손 기본 케어</p>
          <p>40,000원</p>
        </div>
        <div className="flex justify-between">
          <p>발 기본 케어</p>
          <p>50,000원</p>
        </div>
        <div className="flex justify-between">
          <p>손톱 케어</p>
          <p>60,000원</p>
        </div>
        <div className="flex justify-between">
          <p>발톱 케어</p>
          <p>70,000원</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>총 주문 금액</p>
        <p>220,000원</p>
      </div>
      <div className="flex justify-between">
        <p>할인 금액</p>
        <p>0원</p>
      </div>
      <div className="flex justify-between">
        <p>최종 금액</p>
        <p>220,000원</p>
      </div>
    </div>
  );
}
