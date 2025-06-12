import React from 'react';

const WHATSAPP_NUMBER = ' 919876543210'; // e.g., 919876543210
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I%20need%20assistance.`;

export default function WhatsAppChatButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-24 right-6 md:bottom-8 md:right-8 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg hover:bg-green-600 focus:bg-green-600 transition-colors animate-out hover:animate-none group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-9 h-9 text-white drop-shadow group-hover:scale-110 transition-transform"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.85-.58-5.41-1.58l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
      </svg>
    </a>
  );
} 