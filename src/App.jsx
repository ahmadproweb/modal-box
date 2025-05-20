import React, { useState } from "react";
import UpdateBalanceModal from "./components/UpdateBalanceModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const currentBalance = 2500000;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Open Modal
      </button>

      <UpdateBalanceModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentBalance={currentBalance}
      />
    </div>
  );
}

export default App;
