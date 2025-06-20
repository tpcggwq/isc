import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">ISCMUN 2025</h3>
            <p className="text-gray-400">Izmir Sınav College Model United Nations Conference</p>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              © 2025 ISCMUN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;