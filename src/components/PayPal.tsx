import { useState } from "react";

const PayPalModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl text-center relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-primary mb-3">Pay via PayPal</h2>

        {/* Replace this with your real QR image */}
        <img
          src="/qr.png"
          alt="PayPal QR Code"
          className="mx-auto h-48 w-48 object-contain border rounded-lg shadow"
        />

        <p className="text-sm text-gray-700 mt-4">
          Scan & Pay, then share the payment screenshot with us on WhatsApp:  
          <span className="font-bold">+91-98201-04856</span>
        </p>

        <p className="mt-2 text-xs font-medium text-gray-600">
          Or send directly to PayPal email:  
          <span className="font-bold">support@opdsure.com</span>
        </p>
      </div>
    </div>
  );
};

export default PayPalModal;
