import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="text-white bg-[#111111] h-86 font-Montserrat">
      <div className='flex flex-row justify-evenly'>
        <div className='text'>
          <h2 className="mt-6">ShopEzzy.</h2>
          <p className='mt-4 text-gray-600'>400 Broadway Avenue, Suite 200 Coral <br></br> Gables,<br></br> Lagos Nigeria</p>
        </div>
        <div className='link33'>
          <h3 className="mt-6">Links</h3>
          <nav className="list-none">
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/">Home</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/about">About</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/contact">Contact</Link></li>
          </nav>
        </div>
        <div className='link33'>
          <h3 className="mt-6">Shop</h3>
          <nav className="list-none">
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/electronics">Electronics</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/fashion">Fashion</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/groceries">Groceries</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/sports">Sports</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/toy">Toys</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link className="link" to="/babies">Babies</Link></li>
          </nav>
        </div>
        <div className='link44'>
          <h3 className="mt-6">Help</h3>
          <nav className="list-none">
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link to="/help">Help Center</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link to="/payment">Payment Option</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link to="/order">Track Order</Link></li>
            <li className="mt-4 text-slate-700 hover:text-orange-500"><Link to="/policy">Policy</Link></li>
          </nav>
        </div>
        <div className='link45'>
          <h3 className="mt-6">Newsletter</h3>
          <p className="mt-2 text-sm text-slate-700">Receive product news and updates<br />in your inbox.</p>
          <input className="mt-4 border-b-4 border-white-600 border-0 w-full md:text-white md:bg-transparent" type="email" placeholder='Enter Your Email Address' />
          <button className=" mt-2 bg-slate-700 w-full hover:bg-orange-500 rounded-full" type="submit">Subscribe</button>
        </div>
      </div>
      <hr />
      <p className="text-sm">2024 ShopEzzy. All rights reverved</p>
    </div>
  );
};

export default Footer;
