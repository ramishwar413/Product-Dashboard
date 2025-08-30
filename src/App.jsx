import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page !== "product-detail") {
      setSelectedProduct(null);
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product-detail");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage("products"); // redirect to products page after search
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={handleNavigate} />;
      case "register":
        return <Register onNavigate={handleNavigate} />;
      case "home":
        return <Home onNavigate={handleNavigate} onViewProduct={handleViewProduct} />;
      case "products":
        return <Products onViewProduct={handleViewProduct} searchQuery={searchQuery} />;
      case "product-detail":
        return <ProductDetail product={selectedProduct} onBack={() => handleNavigate("products")} />;
      case "cart":
        return <Cart onNavigate={handleNavigate} />;
      case "checkout":
        return <Checkout onNavigate={handleNavigate} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} onViewProduct={handleViewProduct} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={handleNavigate} onSearch={handleSearch} />
        <main className="flex-1">{renderPage()}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
