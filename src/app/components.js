"use client";

import { useState } from "react";

import MenuList from "@/components/home/menu/menu-list";
import MenuBoard from "@/components/home/menu/menu-board";

const tabs = [
  { id: 0, name: "전체" },
  { id: 1, name: "기본 케어" },
  { id: 2, name: "네일 아트" },
  { id: 3, name: "젤 네일" },
  { id: 4, name: "네일 리무버" },
  { id: 5, name: "스페셜 케어" },
];

const menus = [];

for (let i = 0; i < 100; i++) {
  menus.push({
    id: i,
    name: `서비스 ${i + 1}`,
    description: `서비스 ${i + 1} 설명`,
    menuId: i % 6, // 5개의 다른 탭에 맞춰 순환
    price: 30000 + i * 1000, // 가격은 예시로 설정
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // 랜덤 색상
  });
}

export default function HomeComponent() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-4/6">
        <div className="p-8 h-1/6">
          <h1 className="text-3xl font-bold">가나다라 네일샵</h1>
          <div className="flex space-x-4 mt-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${
                  selectedTab === tab.id ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.name}
              </div>
            ))}
          </div>
        </div>
        {selectedTab === 0 ? (
          <MenuBoard menus={menus} />
        ) : (
          <MenuList menus={menus} selectedTab={selectedTab} />
        )}
      </div>
      <div className="w-2/6 bg-[#f5f5f5] p-8 flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-xl font-bold">주문</h2>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>손 기본 케어</p>
              <p>40,000원</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>제거</p>
              <p>6,000원</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>노래 추천 (500원)</p>
              <p>4,000원</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>파츠 제거 (1000원)</p>
              <p>2,000원</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>아트</p>
              <p>8,000원</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>로코코 스타일 2000원</p>
              <p>8,000원</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>오렌지 가득</p>
              <p>0원</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <div variant="outline">판매</div>
            <div className="flex items-center">
              <div variant="outline">-</div>
              <span className="mx-2">1</span>
              <div variant="outline">+</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>주문금액 (3개) :</p>
              <p>54,000원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
