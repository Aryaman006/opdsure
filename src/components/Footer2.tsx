import React from "react";

const OPDSureFooter: React.FC = () => {
  return (
    <footer className="bg-[#0A1A2F] text-gray-200 pt-16 pb-10 px-6 md:px-12 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p>Noida, Uttar Pradesh – 201304</p>

          <p className="mt-3">
            📞{" "}
            <a
              href="tel:+919810113654"
              className="text-primary-light hover:text-white transition font-medium"
            >
              +91-98101-13654
            </a>
          </p>

          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:contact@opdsure.com"
              className="text-primary-light hover:text-white transition font-medium"
            >
              contact@opdsure.com
            </a>
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Legal & Compliance</h2>
          <ul className="space-y-1">
            <li>Finlyt Solutions Pvt. Ltd.</li>
            <li>GST: 09AAECF8058N1ZY</li>
            <li>COI: U74999UP2021PTC155131</li>
            <li>Trademarks: 6246892 / 6246893</li>
            <li>Certificate No: D1PP103946</li>

            {/* ⭐ New Terms Link */}
            <li className="pt-2">
              <a 
                href="/t&c" 
                className="text-primary-light hover:text-white transition font-medium underline"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* App Store */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Download Our App</h2>
          <div className="flex items-center gap-4">
            <a href="https://www.apple.com/in/app-store/" target="_blank">
              <img src="/app.png" alt="App Store" className="h-12 md:h-14 rounded-lg shadow-lg hover:opacity-90" />
            </a>

            <a href="https://play.google.com/store" target="_blank">
              <img src="/play.png" alt="Google Play" className="h-12 md:h-14 rounded-lg shadow-lg hover:opacity-90" />
            </a>
          </div>

          <p className="mt-4 text-sm text-primary-light font-medium">
            Recognized by <span className="font-semibold text-yellow-300">Startup India</span> 🏅
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OPDSure® — Assured Health Partner.  
        <span className="block mt-1 text-gray-500">All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default OPDSureFooter;
