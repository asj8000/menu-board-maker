"use client";

import { useEffect, useState } from "react";

import MenuList from "@/components/home/menu/menu-list";
import MenuBoard from "@/components/home/menu/menu-board";
import MenuModal from "@/components/home/menu/menu-modal";

import menuTempData from "@/data/menu-temp-data.json";
import tabTempData from "@/data/tab-temp-data.json";
import boardTempData from "@/data/board-temp-data.json";

export default function HomeComponent() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabs, setTabs] = useState(tabTempData);
  const [menus, setMenus] = useState(menuTempData);
  const [boardLayout, setBoardLayout] = useState(boardTempData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleMenuClick = (menuId) => {
    const menuData = menus.find((menu) => menu.id === menuId);
    console.log("menuData");
    console.log(menuData);
    setModalData(menuData);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

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
          <MenuBoard
            menus={menus}
            boardLayout={boardLayout}
            onClickMenu={(menuId) => {
              handleMenuClick(menuId);
            }}
          />
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
      <MenuModal
        isModalOpen={isModalOpen}
        modalData={modalData}
        closeModal={closeModal}
      />
    </div>
  );
}
