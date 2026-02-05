import React from 'react';
import { IMAGES, FOOTER_LINKS } from '../constants/data';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={IMAGES.LOGO} alt="Coding Ninjas" className="h-10 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed">
              India's best coding platform for top-tier tech interview preparation. Learn from the best and land your dream job.
            </p>
            <div className="flex gap-4">
              {/* Replace # with your actual social links */}
              <a href="#" className="hover:text-orange-500 transition text-xl">f</a>
              <a href="#" className="hover:text-orange-500 transition text-xl">t</a>
              <a href="#" className="hover:text-orange-500 transition text-xl">in</a>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.products.map(link => (
                <li key={link} className="hover:text-orange-500 transition cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Community</h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.community.map(link => (
                <li key={link} className="hover:text-orange-500 transition cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {FOOTER_LINKS.company.map(link => (
                <li key={link} className="hover:text-orange-500 transition cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 Sunrise Mentors Pvt. Ltd.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Sitemap</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;