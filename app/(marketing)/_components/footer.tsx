import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-200/30 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-purple-700 font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-purple-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-purple-700 font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-purple-600">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-purple-700 font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-purple-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Developers
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-purple-700 font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-purple-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
