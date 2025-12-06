import { MessageCircle } from "lucide-react"; // Updated Icon import
import { useState } from "react";

const PayPalModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl text-center relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-primary mb-4">
          Choose Your Payment Method
        </h2>

        {/* PayPal QR */}
        <div className="border border-gray-200 rounded-xl p-4 mb-5">
          <h3 className="font-semibold text-lg mb-3 text-blue-600">Pay via PayPal</h3>
          
          <img
            src="/qr.jpg"
            alt="PayPal QR Code"
            className="mx-auto h-44 w-44 object-contain border rounded-lg shadow"
          />

          <p className="text-sm text-gray-700 mt-3">
            After payment, send your payment screenshot on WhatsApp:
            <br />
            <a
              href="https://wa.me/9810113654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>+91-9810113654</span>
            </a>
          </p>

          <p className="mt-2 text-xs font-medium text-gray-600">
  Or send to PayPal email:
  <br />
  <a
    href={`mailto:support@opdsure.com?subject=Retreat Payment Confirmation&body=Hi,%0D%0A%0D%0AI have completed the payment. Please find the attached screenshot.%0D%0A%0D%0AThanks!`}
    className="font-bold text-blue-600 hover:text-blue-700 underline"
  >
    support@opdsure.com
  </a>
</p>

        </div>

        {/* Divider */}
        <p className="text-sm font-semibold text-gray-500 my-3">OR</p>

        {/* Razorpay Direct Link */}
        <a
          href="https://rzp.io/rzp/bkUYcyDH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-primary text-white font-bold py-3 rounded-xl shadow hover:bg-primary/90 transition-all text-center"
        >
          Pay Online (Razorpay)
        </a>

      </div>
    </div>
  );
};

export default PayPalModal;
