import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
};

export default function UpdateBalanceModal({
  isOpen,
  setIsOpen,
  currentBalance,
}) {
  const [newBalance, setNewBalance] = useState("");

  const handleUpdate = () => {
    console.log("Current Balance:", formatCurrency(currentBalance));
    console.log("New Balance:", newBalance);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const raw = e.target.value.replace(/[₦,]/g, "");
    if (!isNaN(raw)) {
      const number = parseInt(raw);
      setNewBalance(formatCurrency(number));
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0"
            style={{ backgroundColor: "#898989" }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-4 right-4">
                  <button onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="w-7 h-7 text-white cursor-pointer" />
                  </button>
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-center text-gray-800"
                >
                  Update Bank balance
                </Dialog.Title>

                <p className="mt-1 text-sm text-center text-gray-500">
                  Update the balance for First Bank.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Current Balance
                    </label>
                    <input
                      type="text"
                      value={formatCurrency(currentBalance)}
                      disabled
                      className="mt-1 w-full rounded border border-gray-300 bg-gray-100 px-3 py-2 text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      New Balance (NGN)
                    </label>
                    <input
                      type="text"
                      value={newBalance}
                      onChange={handleInputChange}
                      placeholder="₦0"
                      className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <button
                    onClick={handleUpdate}
                    className="w-full rounded bg-yellow-400 px-4 py-2 font-medium text-white hover:bg-yellow-500"
                  >
                    Update Balance
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
