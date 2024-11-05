import React from 'react';
import { CDN_LOGO } from '../util/constant';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 p-8 font-sans mt-8">
      <div className="flex items-center justify-center mb-8">
        <img src={CDN_LOGO} alt="Swiggy Logo" className="h-10 mr-2" />
        <p>© 2024 Swiggy Limited</p>
      </div>
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
        <div className="mb-4 w-full sm:w-1/2 lg:w-1/5">
          <h4 className="text-black font-semibold mb-2">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div className="mb-4 w-full sm:w-1/2 lg:w-1/5">
          <h4 className="text-black font-semibold mb-2">Contact us</h4>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="mb-4 w-full sm:w-1/2 lg:w-1/5">
          <h4 className="text-black font-semibold mb-2">Available in:</h4>
          <ul className="space-y-2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select className="mt-4 p-2 border border-gray-300 rounded">
            <option>679 cities</option>
          </select>
        </div>
        <div className="mb-4 w-full sm:w-1/2 lg:w-1/5">
          <h4 className="text-black font-semibold mb-2">Life at Swiggy</h4>
          <ul className="space-y-2">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
        <div className="mb-4 w-full sm:w-1/2 lg:w-1/5">
          <h4 className="text-black font-semibold mb-2">Legal</h4>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h4 className="text-black font-semibold mb-2">Social Links</h4>
        <div className="flex space-x-4 text-gray-600">
          <i className="fab fa-linkedin text-lg"></i>
          <i className="fab fa-instagram text-lg"></i>
          <i className="fab fa-facebook text-lg"></i>
          <i className="fab fa-pinterest text-lg"></i>
          <i className="fab fa-twitter text-lg"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
