import React from "react";

const MenuDModal = ({ isModalOpen, modalData, closeModal }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        !isModalOpen && "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-bold mb-4">{modalData.name}</h2>
        <div className="flex justify-between items-center mb-4">
          <span>{modalData.name}</span>
          <span>{modalData.price.toLocaleString()}원</span>
        </div>
        <div className="divide-y divide-gray-200">
          {modalData?.subMenu?.map((subItem, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span>{subItem.name}</span>
              <span>{subItem.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center font-bold mt-4">
          <span>총 합계</span>
          <span>asdf 원</span>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDModal;
