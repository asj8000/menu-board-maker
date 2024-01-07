import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

const MenuDModal = ({ isModalOpen, modalData, closeModal }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        !isModalOpen && "hidden"
      }`}
    >
      <div
        className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        onClick={closeModal}
      ></div>
      <div className="bg-white p-8 rounded-lg w-3/4 h-3/4 flex flex-col justify-between z-10 ">
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-base">옵션 수정</p>
            <XMarkIcon
              className="h-6 w-6 top-4 right-4 cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div className="flex justify-between items-center mt-6 pb-2 border-b text-2xl">
            <p>{modalData?.name}</p>
            <p>{modalData?.price.toLocaleString()}원</p>
          </div>
          <div className="flex flex-col gap-3">
            {modalData?.subMenu?.map((subItem) => (
              <div key={subItem.id} className="grid grid-cols-6 items-center">
                <div className="col-span-3">{subItem.name}</div>
                <div className="col-span-2 flex flex-row gap-2 items-center justify-between w-40">
                  <button
                    className="border border-gray-300 rounded-full w-12 h-8 items-center justify-center flex"
                    onClick={() => {}}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <p>1</p>
                  <button
                    className="border border-gray-300 rounded-full w-12 h-8 items-center justify-center flex"
                    onClick={() => {}}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <div>{subItem.price.toLocaleString()}원</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-end items-center font-bold border-b pb-2">
            <p className="text-lg">총 asdf 원</p>
          </div>
          <div className="flex justify-end gap-2 ">
            <button
              className="text-black py-2 px-6 rounded-full border"
              onClick={closeModal}
            >
              취소
            </button>
            <button
              className="text-black py-2 px-6 rounded-full border"
              onClick={closeModal}
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDModal;
