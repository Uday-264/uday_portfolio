// components/Footer.js
const Footer = () => {
  return (
    <footer className="section-padding text-gray-400 relative z-10">
      <div className=" mx-auto text-center py-6">
        {/* Top Border */}
        <div className="border-t-4 border-red-500 mb-4"></div>

        {/* Made with Love Message */}
        <p className="text-gray-300 text-lg font-bold mb-2">
          Made with <span className="text-red-500">❤️</span> by Udaykumar
        </p>

        {/* Copyright Notice */}
        <p className="text-gray-300 text-lg">
          All rights reserved &copy; Udaykumar Bethi 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
