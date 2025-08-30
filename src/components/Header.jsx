import { User, ShoppingCart } from "lucide-react";

function Header({ currentPage, onNavigate, onSearch }) {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <h1
        onClick={() => onNavigate("home")}
        className="text-xl font-bold cursor-pointer text-blue-600"
      >
        ShopHub
      </h1>

      {/* Navigation links */}
      <nav className="flex gap-6">
        <span
          onClick={() => onNavigate("home")}
          className={`cursor-pointer ${currentPage === "home" ? "font-bold text-blue-600" : ""}`}
        >
          Home
        </span>
        <span
          onClick={() => onNavigate("products")}
          className={`cursor-pointer ${currentPage === "products" ? "font-bold text-blue-600" : ""}`}
        >
          Products
        </span>
        <span
          onClick={() => onNavigate("about")}
          className={`cursor-pointer ${currentPage === "about" ? "font-bold text-blue-600" : ""}`}
        >
          About
        </span>
        <span
          onClick={() => onNavigate("contact")}
          className={`cursor-pointer ${currentPage === "contact" ? "font-bold text-blue-600" : ""}`}
        >
          Contact
        </span>
      </nav>

      {/* Search + Icons */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <User
          className="cursor-pointer"
          onClick={() => onNavigate("login")}
        />
        <ShoppingCart
          className="cursor-pointer"
          onClick={() => onNavigate("cart")}
        />
      </div>
    </header>
  );
}

export default Header;
