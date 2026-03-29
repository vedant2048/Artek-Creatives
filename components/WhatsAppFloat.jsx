import React, { useState } from "react";
import { X } from "lucide-react";

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "+917045183241"; // change this
  const whatsappIcon = "/Images/whatsapp.png"; // dummy path (put your png here)

  const faqs = [
    {
      text: "How to order?",
      message: "Hi, I want to know how to order jewellery.",
    },
    {
      text: "Delivery time?",
      message: "Hi, what is the delivery time?",
    },
    {
      text: "Return & Refund?",
      message: "Hi, what is your return and refund policy?",
    },
  ];

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg overflow-hidden hover:scale-105 transition"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[90vw] sm:w-72 bg-white shadow-xl rounded-2xl p-4 z-50 animate-fadeIn">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-base sm:text-lg">
              Chat with us
            </h3>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* FAQ Buttons */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => openWhatsApp(faq.message)}
                className="text-left bg-gray-100 hover:bg-gray-200 p-2 sm:p-3 rounded-lg text-sm"
              >
                {faq.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;