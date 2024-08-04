import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userEmail, onLogout }) => {

    const maskEmail = (email) => {
        if (!email) return "";
        const maskedLocalPart = email.length > 4 ? `${email.slice(0, 6)}...` : email;
        return `${maskedLocalPart}`;
      };

  return (
    <header className="bg-gray-500 text-white shadow-md">
      <div className="container mx-auto flex justify-center py-4 px-6">
        <div className="flex justify-between items-center w-full max-w-4xl">
          <div className="text-2xl font-bold">
            <Link to="/">IDKShop</Link>
          </div>
          <nav className="space-x-10">
            <Link to="/" className="hover:text-gray-300">Catalog</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link> 
            {userEmail ? (
              <>
                <span className="text-green-300">{maskEmail(userEmail)}</span>
                <button onClick={onLogout} className="text-red-400 hover:text-gray-300">Logout</button>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-300">Login</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
